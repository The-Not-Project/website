import { Media, RawMedia } from '@/app/types/types';
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

export async function transformMedia(media: RawMedia, compression?: number): Promise<Media> {
  try {
    const signedUrl = await pinata.gateways
      .createSignedURL({
        cid: media.cid,
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
      cid: true,
    },
  });
  const cids = mediaIds.map(media => media.cid);

  await pinata.files.delete(cids);

  await prisma.media.deleteMany({
    where: {
      storyId: id,
    },
  });
}

