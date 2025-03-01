import { RawStory, Story } from "../types/types";
import { processStory } from "./helper-functions/helper-functions";
import { prisma } from "./prisma";

export async function getRadarStory(compression?: number): Promise<Story | null> {
    'use server';
  
    const radarStory = await prisma.radar.findFirst();
  
    if (!radarStory) {
      return null;
    }
  
    const story = await prisma.story.findUnique({
      where: {
        id: radarStory.storyId,
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
  
    return processStory(story as RawStory, compression);
  }
  
  export async function updateRadarStory(id: string) {
    'use server';
  
    await prisma.radar.create({
      data: {
        storyId: id,
      },
    });
  }
  
  export const deleteRadarStory = async () => {
    'use server';
  
    await prisma.radar.deleteMany();
  };
  