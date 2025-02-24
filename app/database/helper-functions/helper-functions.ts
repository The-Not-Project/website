import { Story } from '@/app/types/types';
import { pinata } from '@/app/utils/config';
import { prisma } from '../prisma';

export async function uploadFileToPinata(file: File): Promise<string> {
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

export async function processStories(
  stories: any[],
  compression?: number
): Promise<Story[]> {
  return Promise.all(stories.map(story => processStory(story, compression)));
}

export async function processStory(story: any, compression?: number): Promise<Story> {
  const mediaWithUrls = await Promise.all(
    story.media.map((media: any) => transformMedia(media, compression))
  );

  return {
    ...story,
    categories: story.categories.map((sc: { category: any }) => sc.category),
    media: mediaWithUrls,
  };
}

export async function transformMedia(media: any, compression?: number): Promise<any> {
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

  await pinata.files.delete([
    'bafkreicbh73f442wngpsryl7ay2kd7qmedsceg4ckbmhslgs4r3e5btifm',
  ]);

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
