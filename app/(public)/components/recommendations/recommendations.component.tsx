'use client';

import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import {
  RecommendationsContainer,
  BigTitle,
  SecondaryTitle,
  RecommendationCard,
  RecommendationsList,
} from './recommendations.styles';
import { useCallback, useEffect, useState } from 'react';
import { Story } from '@/app/types/types';
import Image from 'next/image';

export default function Recommendations() {
  const { getRecommendations } = usePublicServerActions();

  const [recommendations, setRecommendations] = useState<Story[]>([]);

  const fetchRecommendations = useCallback(async () => {
    const recommendations = await getRecommendations(600);
    setRecommendations(recommendations);
  }, [getRecommendations]);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <RecommendationsContainer>
      <BigTitle>Stories we think you&apos;ll like</BigTitle>
      <SecondaryTitle>Check out our recommended stories below</SecondaryTitle>
      <RecommendationsList>
        <div>
          {recommendations.slice(0, 2).map(recommendation => (
            <RecommendationCard key={recommendation.id}>
              <Image
                src={recommendation.media[0].url || ''}
                width={300}
                height={200}
                alt='thumbnail'
              />
              <h3>{recommendation.title}</h3>
              <p>{recommendation.summary}</p>
            </RecommendationCard>
          ))}
        </div>
        <div>
          {recommendations.slice(2, 4).map(recommendation => (
            <RecommendationCard key={recommendation.id}>
              <Image
                src={recommendation.media[0].url || ''}
                width={300}
                height={200}
                alt='thumbnail'
              />
              <h3>{recommendation.title}</h3>
              <p>{recommendation.summary}</p>
            </RecommendationCard>
          ))}
        </div>
      </RecommendationsList>
    </RecommendationsContainer>
  );
}
