import { Story as StoryType } from '@/app/types/types';
import {
  StoryContainer,
  StoryContentContainer,
  StoryImageContainer,
} from './story.styles';
import { pinata } from '@/app/utils/config';
import { useEffect, useState } from 'react';

export default function Story({ story }: { story: StoryType }) {
  const [thumbnail, setThumbnail] = useState<string | undefined>(undefined);
  const date = new Date(story.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  async function createImageUrl() {
    const cid = story.media.find(media => media.isThumbnail == true)?.url;
    const signedUrl = await pinata.gateways.createSignedURL({
      cid: cid as string,
      expires: 3600,
    });

    setThumbnail(signedUrl);
  }

  useEffect(() => {
    createImageUrl();
  }, []);

  return (
    <StoryContainer>
      <StoryImageContainer src={thumbnail} />
      <StoryContentContainer>
        <h2>{story.title}</h2>
        <p>By {`${story.author.firstName} ${story.author.lastName}`}</p>
        <p>Created At {date}</p>
      </StoryContentContainer>
    </StoryContainer>
  );
}
