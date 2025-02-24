import { Story } from "../types/types";
import { processStories } from "./helper-functions/helper-functions";
import { prisma } from "./prisma";

export async function getRecommendations(
    compression?: number
  ): Promise<Story[]> {
    'use server';
  
    const recommendedStoriesIds = await prisma.recommendation.findMany();
  
    const recommendedStories = await prisma.story.findMany({
      where: {
        id: {
          in: recommendedStoriesIds.map(rec => rec.storyId),
        },
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
  
    return processStories(recommendedStories, compression);
  }
  
  export async function addRecommendation(id: string) {
    'use server';
  
    await prisma.recommendation.create({
      data: {
        storyId: id,
      },
    });
  }
  
  export async function removeRecommendation(id: string) {
    'use server';
  
    await prisma.recommendation.delete({
      where: {
        storyId: id,
      },
    });
  }