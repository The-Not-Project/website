'use client';

import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import {
  RecommendationsContainer,
  BigTitle,
  SecomdTitle,
  RecommendationCard,
  RecommendationsList,
} from './recommendations.styles';
import { useEffect, useState } from 'react';
import { Story } from '@/app/types/types';

export default function Recommendations() {

  const { getRecommendations } = usePublicServerActions();

  const [recommendations, setRecommendations] = useState<Story[]>([]);

  async function fetchRecommendations() {
    const recommendations = await getRecommendations(600);
    setRecommendations(recommendations);
  }

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <RecommendationsContainer>
      <BigTitle>Stories we think you'll like</BigTitle>
      <SecomdTitle>Check out our recommended stories below</SecomdTitle>
      <RecommendationsList>
        {recommendations.map((recommendation) => (
           <RecommendationCard key={recommendation.id}>
            <img src={recommendation.media[0].url} />
            <h3>{recommendation.title}</h3>
            <p>{recommendation.summary}</p>
          </RecommendationCard>
        ))}
      </RecommendationsList>
    </RecommendationsContainer>
  );
}
