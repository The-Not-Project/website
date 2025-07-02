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
// import StoryPopup from '../storyPopup/storyPopup.component';

export default function Story({ story }: { story: StoryType }) {
  const isMobile = useStore((state) => state.mobileLayout.isMobile);
  const router = useRouter();

  // type HoveredStoryState = {
  //   story: StoryType | null;
  //   isHovered: boolean;
  //   position: number;
  // };

  // const [hoveredStory, setHoveredStory] = useState<HoveredStoryState>({
  //   story: null,
  //   isHovered: false,
  //   position: 0,
  // });

  // const storyContainerRef = useRef<HTMLDivElement>(null);

  const thumbnail = story.media.find((media) => media.isThumbnail)?.url;
  const date = new Date(story.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // const handleMouseEnter = (event: React.MouseEvent) => {
  //   const storyElement = event.currentTarget.getBoundingClientRect();
  //   const parentElement =
  //     event.currentTarget.parentElement?.getBoundingClientRect();

  //   if (!parentElement) return;

  //   let newPosition = storyElement.top + storyElement.height / 2;
  //   const popupHeight = 250;

  //   if (newPosition - popupHeight / 2 < parentElement.top) {
  //     newPosition = parentElement.top + popupHeight / 2;
  //   }
  //   if (newPosition + popupHeight / 2 > parentElement.bottom) {
  //     newPosition = parentElement.bottom - popupHeight / 2;
  //   }

  //   setHoveredStory({
  //     story: story,
  //     isHovered: true,
  //     position: newPosition - storyElement.top,
  //   });
  // };

  // const handleMouseLeave = () => {
  //   setHoveredStory({
  //     story: null,
  //     isHovered: false,
  //     position: 0,
  //   });
  // };

  return (
    <StoryContainer
    // ref={storyContainerRef}
    // onMouseEnter={handleMouseEnter}
    // onMouseLeave={handleMouseLeave}
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
      {/* {hoveredStory.isHovered && (
        <StoryPopup
          story={hoveredStory.story!}
          position={hoveredStory.position}
        />
      )} */}
    </StoryContainer>
  );
}
