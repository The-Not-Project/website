'use client';

import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import useRadarVisibility from '@/app/hooks/useRadarVisibility';
import {
  RadarDescription,
  RadarPhoto,
  RadarCardContainer,
} from './radarCard.styles';
import { useEffect, useState } from 'react';
import { Story } from '@/app/types/types';

type RadarCardProps = {
  setLoadingAction: (value: boolean) => void;
};

export default function RadarCard({ setLoadingAction }: RadarCardProps) {
  const { getRadarStory } = usePublicServerActions();
  const [radarStory, setRadarStory] = useState<Story | null>(null);

  useEffect(() => {
    fetchRadarStory();
  }, []);

  async function fetchRadarStory() {
    const story = await getRadarStory();

    if (story?.media[0]?.url) {
      const img = new Image();
      img.src = story.media[0].url;

      img.onload = () => {
        setLoadingAction(false);
        setRadarStory(story);
      };

      document.head.appendChild(img);
    } else {
      setRadarStory(story);
    }
  }

  const url = radarStory?.media[0]?.url || '';
  const { ref, isVisible } = useRadarVisibility({ threshold: 0.9 });

  return (
    <RadarCardContainer>
      <>
        <RadarDescription $isVisible={isVisible} $url={url} ref={ref}>
          <h2 className='title'>{radarStory?.title}</h2>
          <p className='summary'>“{radarStory?.summary}”</p>
          <p className='author'>
            By{' '}
            {`${radarStory?.author.firstName} ${radarStory?.author.lastName}`}
          </p>
          <div className='overlay'></div>
        </RadarDescription>
        <RadarPhoto $url={url} />
      </>
    </RadarCardContainer>
  );
}
