import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import { prisma } from '../prisma';
import { getUser } from './user.repository';
import {
  deleteStoryCategories,
  getStoryData,
  processCategories,
  processFiles,
  processStories,
  processStory,
  STORY_INCLUDE,
} from '../helpers/story.helpers';
import { deleteMedia } from '../helpers/media.helpers';
import { Filters, RawStory, Story } from '../../types/types';

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
    include: STORY_INCLUDE,
  });

  return processStories(stories, compression);
}

export async function getStory(id: string, compression?: number): Promise<Story> {
  'use server'

  const story = await prisma.story.findUnique({
    where: { id },
    include: STORY_INCLUDE,
  });

  return processStory(story as RawStory, compression);
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

  const { title, content, borough, summary, categoryIds, files } =
    getStoryData(formData);

  const newStory = await prisma.story.create({
    data: {
      title,
      content,
      borough,
      summary,
      author: { connect: { id: user.id } },
    },
  });

  await processCategories(newStory.id, categoryIds);
  await processFiles(newStory.id, files);
}

export async function editStory(id: string, formData: FormData) {
  'use server';

  const { title, content, borough, summary, categoryIds, files } =
    getStoryData(formData);

  await prisma.story.update({
    where: { id },
    data: { title, content, borough, summary },
  });

  await deleteStoryCategories(id);
  await processCategories(id, categoryIds);

  if (files.length > 0) {
    await deleteMedia(id);
  }
  await processFiles(id, files);
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
