import { getSession } from "@auth0/nextjs-auth0";
import { getUser } from "./user";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { deleteMedia, deleteStoryCategories, processStories, uploadFileToPinata } from "./helper-functions/helper-functions";
import { Filters, Story } from "../types/types";

export async function createStory(formData: FormData) {
  'use server';

  const session = await getSession();
  if (!session) throw new Error('User not authenticated');
  const user = await getUser(session.user.sub);
  if (!user) throw new Error('User not found');

  if (!user.firstName || !user.lastName) {
    redirect('/admin/personal-info');
  }
  const [title, content, borough, summary] = [
    'title',
    'content',
    'borough',
    'summary',
  ].map(field => formData.get(field)?.toString());

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
      summary,
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

export async function getStories(
  filters?: Filters,
  compression?: number
): Promise<Story[]> {
  'use server';

  const { search, boroughs, categories } = filters || {};

  const stories = await prisma.story.findMany({
    where: {
      ...(search ? { title: { startsWith: search } } : {}),
      ...(boroughs && boroughs.length > 0 ? { borough: { in: boroughs } } : {}),
      ...(categories && categories.length > 0
        ? { categories: { some: { categoryId: { in: categories } } } }
        : {}),
    },
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

  return processStories(stories, compression);
}

export async function editStory(id: string, formData: FormData) {
  'use server';

  const [title, content, borough, summary] = [
    'title',
    'content',
    'borough',
    'summary',
  ].map(field => formData.get(field)?.toString());

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
      summary,
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

  if (files.length > 0) {
    await deleteMedia(id);
  }

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

export async function deleteStory(id: string) {
  'use server';

  await deleteMedia(id);
  await deleteStoryCategories(id);

  await prisma.story.delete({
    where: {
      id,
    },
  });
}