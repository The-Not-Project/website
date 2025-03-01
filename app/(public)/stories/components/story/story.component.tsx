import { useState, useRef } from 'react';
import Image from 'next/image';
import { Story as StoryType } from '@/app/types/types';
import {
  StoryContainer,
  StoryContent,
  CategoriesContainer,
  Category,
} from './story.styles';
import StoryPopup from '../storyPopup/storyPopup.component';

export default function Story({ story }: { story: StoryType }) {
  type HoveredStoryState = {
    story: StoryType | null;
    isHovered: boolean;
    position: number;
  };

  const [hoveredStory, setHoveredStory] = useState<HoveredStoryState>({
    story: null,
    isHovered: false,
    position: 0,
  });

  const storyContainerRef = useRef<HTMLDivElement>(null);

  const thumbnail = story.media.find(media => media.isThumbnail)?.url;
  const date = new Date(story.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const handleMouseEnter = (event: React.MouseEvent) => {
    const storyElement = event.currentTarget.getBoundingClientRect();
    const parentElement =
      event.currentTarget.parentElement?.getBoundingClientRect();

    if (!parentElement) return;

    let newPosition = storyElement.top + storyElement.height / 2;
    const popupHeight = 500;

    if (newPosition - popupHeight / 2 < parentElement.top) {
      newPosition = parentElement.top + popupHeight / 2;
    }
    if (newPosition + popupHeight / 2 > parentElement.bottom) {
      newPosition = parentElement.bottom - popupHeight / 2;
    }

    setHoveredStory({
      story: story,
      isHovered: true,
      position: newPosition - storyElement.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredStory({
      story: null,
      isHovered: false,
      position: 0,
    });
  };

  return (
    <StoryContainer
      ref={storyContainerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={thumbnail || ''} width={280} height={150} alt='thumbnail' />
      <StoryContent>
        <p className='createdAt'>{date}</p>
        <h2 className='title'>{story.title}</h2>
        <p>By {`${story.author.firstName} ${story.author.lastName}`}</p>
        {story.categories.length > 0 && (
          <CategoriesContainer>
            {story.categories.map(category => (
              <Category key={category.id}>{category.name}</Category>
            ))}
          </CategoriesContainer>
        )}
      </StoryContent>
      {hoveredStory.isHovered || story.id == '034f17f1-daa7-4c0b-81f2-9ab386c7d723' && (
        <StoryPopup
          story={story}
          position={250}
          // story={hoveredStory.story!}
          // position={hoveredStory.position}
        />
      )}
    </StoryContainer>
  );
}
