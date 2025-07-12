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

export async function deleteMedia(mediaId: string) {
  'use server';  

  const cid = await prisma.media.findUnique({
    where: {
      id: mediaId,
    },
    select: {
      cid: true,
    },
  });

  console.log(mediaId, "OF TYPE", typeof mediaId);
  
  await prisma.media.delete(
    {
      where: {
        id: mediaId,
      },
    }
  )

  await pinata.files.delete([cid?.cid || '']);
}

export async function deleteMediaByStoryId(storyId: string) {
  'use server';

  const media = await prisma.media.findMany({
    where: {
      storyId,
    },
  });

  if (media.length > 0) {
    await pinata.files.delete(media.map(m => m.cid));
    await prisma.media.deleteMany({
      where: {
        storyId,
      },
    });
  }
}
