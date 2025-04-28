"use client";

import { useCallback, useEffect, useState } from "react";
import { Story } from "@/app/types/types";
import { usePublicServerActions } from "@/app/contexts/public-server-actions";
import {
  RecommendationsContainer,
  BigTitle,
  SecondaryTitle,
  RecommendationsList,
} from "./recommendations.styles";
import RecommendationCard from "./recommendationCard.component";

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

  if (recommendations.length === 0) {
    return null; 
  }

  return (
    <RecommendationsContainer>
      <BigTitle>Stories we think you&apos;ll like</BigTitle>
      <SecondaryTitle>Check out our recommended stories below</SecondaryTitle>
      <RecommendationsList>
        <div className="row">
          {recommendations.slice(0, 2).map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
        </div>
        <div className="row">
          {recommendations.slice(2, 4).map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
        </div>
      </RecommendationsList>
    </RecommendationsContainer>
  );
}
