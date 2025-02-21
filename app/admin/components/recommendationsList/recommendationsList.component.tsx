// components/recommendationsList/recommendationsList.component.tsx
'use client';
import { Story } from '@/app/types/types';
import {
  ImageContainer,
  RecommendationContainer,
  RecommendationsListContainer,
} from './recommendationsList.styles';
import LoadingPage from '../loadingPage/loadingPage.component';
import {FaTrash as TrashCan} from 'react-icons/fa6'

type RecommendationsListProps = {
  recommendations: Story[];
  onRemoveAction: (id: string) => void;
  isLoading: boolean;
};

export default function RecommendationsList({
  recommendations,
  onRemoveAction,
  isLoading,
}: RecommendationsListProps) {
  if (isLoading) return <LoadingPage />;
  if (!recommendations.length) return <div>No recommendations yet</div>;

  return (
    <RecommendationsListContainer>
      {recommendations.map(rec => (
        <RecommendationContainer key={rec.id}>
          <h3>{rec.title}</h3>
          <h4>By {`${rec.author.firstName} ${rec.author.lastName}`}</h4>
          <ImageContainer
            src={rec.media[0].url}
            alt='Photo'
            width={150}
            height={100}
            onClick={() => onRemoveAction(rec.id)}
          />
          <p><TrashCan /></p>

        </RecommendationContainer>
      ))}
    </RecommendationsListContainer>
  );
}
