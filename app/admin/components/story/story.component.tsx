import { Story as StoryType } from '@/app/types/types';
import {
  StoryContainer,
  StoryContentContainer,
  StoryImageContainer,
} from './story.styles';
import { useState } from 'react';

export default function Story({ story }: { story: StoryType }) {
  const date = new Date(story.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const url = story.media[0].url;
  

  return (
    <StoryContainer>
      <StoryImageContainer src={url} />
      <StoryContentContainer>
        <h2>{story.title}</h2>
        <p>By {`${story.author.firstName} ${story.author.lastName}`}</p>
        <p>Created At {date}</p>
      </StoryContentContainer>
    </StoryContainer>
  );
}
