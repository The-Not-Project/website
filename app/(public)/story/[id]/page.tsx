'use client';

import { useParams } from 'next/navigation';
import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import { Fragment, JSX, useCallback, useEffect, useState } from 'react';
import { Story } from '@/app/types/types';
import { CategoriesContainer, StoryContainer } from './style';
import Image from 'next/image';

export default function StoryPage() {
  const { id } = useParams() as { id: string };
  const { getStory } = usePublicServerActions();
  const [story, setStory] = useState<Story | null>(null);

  const fetchStory = useCallback(async () => {
    const story = await getStory(id);
    setStory(story);
  }, [id, getStory]);

  useEffect(() => {
    fetchStory();
  }, [fetchStory]);

  if (!story) return <div>Loading...</div>;

  const thumbnail = story.media.find(media => media.isThumbnail)?.url;
  const author = story.author.firstName + ' ' + story.author.lastName;
  const date = new Date(story.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const additionalMedia = story.media.filter(media => !media.isThumbnail);
  const contentParts = story.content.split('[photo]');
  const contentElements: JSX.Element[] = [];
  contentParts.forEach((part, index) => {
    if (part.trim()) {
      contentElements.push(<p key={`text-${index}`}>{part}</p>);
    }
    if (index < contentParts.length - 1 && additionalMedia[index]) {
      contentElements.push(
        <Image
          key={`media-${index}`}
          src={additionalMedia[index].url}
          width={1500}
          height={1000}
          alt='additional media'
        />
      );
    }
  });

  return (
    <StoryContainer>
      {story.categories.length > 0 && (
        <CategoriesContainer>
          {story.categories.map((category, index) => (
            <Fragment key={category.id}>
              <span>{category.name}</span>
              {index < story.categories.length - 1 && (
                <span className='divider'>|</span>
              )}
            </Fragment>
          ))}
        </CategoriesContainer>
      )}
      <h1 className='title'>{story.title}</h1>
      <p className='summary'>{story.summary}</p>
      <Image src={thumbnail || ''} width={1500} height={1000} alt='thumbnail' />
      <hr />
      <div className='info'>
        <p>By {author}</p>
        <p>{date}</p>
      </div>
      <div className='content'>
        {contentElements}
      </div>
    </StoryContainer>
  );
}
