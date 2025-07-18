// import { useState, useRef } from 'react';
import { Fragment } from "react";
import Link from "next/link";
import { useStore } from "@/app/zustand/store";
import { Story as StoryType } from "@/app/types/types";
import {
  StoryContainer,
  StoryContent,
  CategoriesContainer,
} from "./story.styles";
import { useRouter } from "next/navigation";

export default function Story({ story }: { story: StoryType }) {
  const isMobile = useStore((state) => state.mobileLayout.isMobile);
  const router = useRouter();

  const thumbnail = story.media.find((media) => media.isThumbnail)?.url;
  const date = new Date(story.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <StoryContainer
      onClick={() => isMobile && router.push(`/story/${story.id}`)}
    >
      <StoryContent>
        {isMobile ? (
          <>
            <h2 className="title">
              <Link href={`/story/${story.id}`}>{story.title}</Link>
            </h2>
            <div className="info">
              <span className="createdAt">{date}</span>
              {story.categories.length > 0 && (
                <CategoriesContainer>
                  <span>・{story.categories[0].name}</span>
                </CategoriesContainer>
              )}
            </div>
          </>
        ) : (
          <>
            {story.categories.length > 0 && (
              <CategoriesContainer>
                {story.categories.map((category, index) => (
                  <Fragment key={category.id}>
                    <span>{category.name}</span>
                    {index < story.categories.length - 1 && (
                      <span className="divider">|</span>
                    )}
                  </Fragment>
                ))}
              </CategoriesContainer>
            )}
            <h2 className="title">
              <Link href={`/story/${story.id}`}>{story.title}</Link>
            </h2>
            <p>{story.summary}</p>
            <p className="createdAt">{date}</p>
          </>
        )}
      </StoryContent>
      <img src={thumbnail} alt="thumbnail" />
    </StoryContainer>
  );
}
