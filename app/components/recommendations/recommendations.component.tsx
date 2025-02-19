'use client';

import {
  RecommendationsContainer,
  BigTitle,
  SecomdTitle,
  RecommendationCard,
  RecommendationsList,
} from './recommendations.styles';

export default function Recommendations() {
  return (
    <RecommendationsContainer>
      <BigTitle>Stories we think you'll like</BigTitle>
      <SecomdTitle>Check out our recommended stories below</SecomdTitle>
      <RecommendationsList>
        <div>
          <RecommendationCard>
            <img src='https://picsum.photos/350/250?random=1' />
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores temporibus vitae in ullam ducimus possimus quia saepe,
              placeat facere aliquid!
            </p>
          </RecommendationCard>
          <RecommendationCard>
            <img src='https://picsum.photos/350/250?random=2' />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              labore dolorum exercitationem suscipit minus rem illo culpa sint
              quam. Cumque molestiae molestias beatae placeat rerum.
            </p>
          </RecommendationCard>
        </div>
        <div>
          <RecommendationCard>
            <img src='https://picsum.photos/350/250?random=3' />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              obcaecati.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat blanditiis sapiente ex obcaecati dignissimos?
            </p>
          </RecommendationCard>
          <RecommendationCard>
            <img src='https://picsum.photos/350/250?random=4' />
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              illum, libero rem doloremque vitae fugit tempora optio dolorum
              quam repellat hic laborum!
            </p>
          </RecommendationCard>
        </div>
      </RecommendationsList>
    </RecommendationsContainer>
  );
}
