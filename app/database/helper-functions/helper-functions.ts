import { Category, Media, RawMedia, RawStory, Story } from '@/app/types/types';
import { pinata } from '@/app/utils/config';
import { prisma } from '../prisma';

export async function uploadFileToPinata(file: File): Promise<string> {
  const data = new FormData();
  data.set('file', file);

  const uploadResponse = await fetch(`${process.env.PUBLIC_API_BASE_URL}/files`, {
    method: 'POST',
    body: data,
  });

  if (!uploadResponse.ok) {
    throw new Error('File upload failed');
  }

  const signedUrl = await uploadResponse.json();
  return signedUrl;
}

export async function processStories(
  stories: RawStory[],
  compression?: number
): Promise<Story[]> {
  return Promise.all(stories.map(story => processStory(story, compression)));
}

export async function processStory(story: RawStory, compression?: number): Promise<Story> {
  const mediaWithUrls = await Promise.all(
    story.media.map((media: RawMedia) => transformMedia(media, compression))
  );

  return {
    ...story,
    categories: story.categories.map((sc: { category: Category }) => sc.category),
    media: mediaWithUrls,
  };
}

export async function transformMedia(media: RawMedia, compression?: number): Promise<Media> {
  try {
    const signedUrl = await pinata.gateways
      .createSignedURL({
        cid: media.url,
        expires: 3600,
      })
      .optimizeImage({
        width: compression ? compression : undefined,
        format: 'webp',
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
}

export async function deleteMedia(id: string) {
  'use server';

  const mediaIds = await prisma.media.findMany({
    where: {
      storyId: id,
    },
    select: {
      url: true,
    },
  });
  const urls = mediaIds.map(media => media.url);

  await pinata.files.delete(urls);

  await prisma.media.deleteMany({
    where: {
      storyId: id,
    },
  });
}

export async function deleteStoryCategories(id: string) {
  'use server';

  await prisma.storyCategory.deleteMany({
    where: {
      storyId: id,
    },
  });
}
