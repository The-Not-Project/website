import { PrismaClient } from '@prisma/client';
import { getSession } from '@auth0/nextjs-auth0';
import { Story, User } from './types/types';
import { redirect } from 'next/navigation';
import { pinata } from './utils/config';

const globalPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalPrisma.prisma = prisma;

export async function createUser(FormData: FormData) {
  'use server';

  const id = FormData.get('id')?.toString();
  const email = FormData.get('email')?.toString();

  if (!id || !email) {
    return;
  }

  await prisma.user.create({
    data: {
      id,
      email,
      firstName: '',
      lastName: '',
    },
  });
}

export async function getUser(id: string) {
  'use server';
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}

export async function UpdateUser(data: FormData, user: User) {
  'use server';

  const firstName = data.get('firstName');
  const lastName = data.get('lastName');

  if (!firstName || !lastName) {
    return;
  }

  await prisma.user.update({
    where: {
      id: user?.id,
    },
    data: {
      firstName: firstName.toString(),
      lastName: lastName.toString(),
    },
  });
}

export async function getCategories() {
  'use server';

  const categories = await prisma.category.findMany();

  return categories;
}

export async function createCategory(data: FormData) {
  'use server';

  const name = data.get('name');
  const description = data.get('description');

  if (!name || !description) {
    return;
  }

  await prisma.category.create({
    data: {
      name: name.toString(),
      description: description.toString(),
    },
  });
}

export const deleteCategory = async (id: string) => {
  'use server';

  await prisma.category.delete({
    where: {
      id,
    },
  });
};

export const editCategory = async (id: string, data: FormData) => {
  'use server';

  const name = data.get('name');
  const description = data.get('description');

  if (!name || !description) {
    return;
  }

  await prisma.category.update({
    where: {
      id,
    },
    data: {
      name: name.toString(),
      description: description.toString(),
    },
  });
};

async function uploadFileToPinata(file: File): Promise<string> {
  const data = new FormData();
  data.set('file', file);

  const uploadResponse = await fetch('http://localhost:3000/api/files', {
    method: 'POST',
    body: data,
  });

  if (!uploadResponse.ok) {
    throw new Error('File upload failed');
  }

  const signedUrl = await uploadResponse.json();
  return signedUrl;
}

export async function createStory(formData: FormData) {
  'use server';

  const session = await getSession();
  if (!session) throw new Error('User not authenticated');
  const user = await getUser(session.user.sub);
  if (!user) throw new Error('User not found');

  if (!user.firstName || !user.lastName) {
    redirect('/admin/personal-info');
  }

  const title = formData.get('title')?.toString();
  const content = formData.get('content')?.toString();
  const borough = formData.get('borough')?.toString();

  const categoryIds = formData.getAll('categories').map(val => val.toString());

  if (!title || !content || !borough) {
    throw new Error('Missing required story fields');
  }

  const newStory = await prisma.story.create({
    data: {
      title,
      content,
      borough,
      author: { connect: { id: user.id } },
    },
  });

  for (const catId of categoryIds) {
    await prisma.storyCategory.create({
      data: {
        storyId: newStory.id,
        categoryId: catId,
      },
    });
  }

  const files = formData
    .getAll('files')
    .filter(file => file instanceof File && file.size > 0) as File[];

  for (let i = 0; i < files.length; i++) {
    const file = files[i] as File;
    const url = await uploadFileToPinata(file);
    await prisma.media.create({
      data: {
        url,
        storyId: newStory.id,
        isThumbnail: i === 0,
      },
    });
  }
}

export async function getStories(): Promise<Story[]> {
  'use server';

  // Fetch stories with relations
  const stories = await prisma.story.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      media: true,
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  const storiesWithSignedUrls = await Promise.all(
    stories.map(async story => {
      const mediaWithUrls = await Promise.all(
        story.media.map(async media => {
          try {
            const signedUrl = await pinata.gateways.createSignedURL({
              cid: media.url,
              expires: 3600,
            });

            return {
              ...media,
              id: media.id.toString(),
              url: signedUrl,
            };
          } catch (error) {
            console.error('Error generating signed URL:', error);
            return {
              ...media,
              id: media.id.toString(),
              url: '/fallback-image.jpg',
            };
          }
        })
      );

      return {
        ...story,
        categories: story.categories.map(sc => sc.category),
        media: mediaWithUrls,
      };
    })
  );

  return storiesWithSignedUrls;
}

async function deleteMedia(id: string) {
  'use server';

  await prisma.media.deleteMany({
    where: {
      storyId: id,
    },
  });
};

async function deleteStoryCategories(id: string) {
  'use server';

  await prisma.storyCategory.deleteMany({
    where: {
      storyId: id,
    },
  });
}

export async function deleteStory(id: string) {
  'use server';

  await deleteMedia(id);
  await deleteStoryCategories(id);

  await prisma.story.delete({
    where: {
      id,
    },
  });
};

export async function editStory(id: string, formData: FormData) {
  'use server';

  const title = formData.get('title')?.toString();
  const content = formData.get('content')?.toString();
  const borough = formData.get('borough')?.toString();

  const categoryIds = formData.getAll('categories').map(val => val.toString());

  if (!title || !content || !borough) {
    throw new Error('Missing required story fields');
  }

  await prisma.story.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      borough,
    },
  });

  await deleteStoryCategories(id);

  for (const catId of categoryIds) {
    await prisma.storyCategory.create({
      data: {
        storyId: id,
        categoryId: catId,
      },
    });
  }

  const files = formData
    .getAll('files')
    .filter(file => file instanceof File && file.size > 0) as File[];

  for (let i = 0; i < files.length; i++) {
    const file = files[i] as File;
    const url = await uploadFileToPinata(file);
    await prisma.media.create({
      data: {
        url,
        storyId: id,
        isThumbnail: i === 0,
      },
    });
  }
}
