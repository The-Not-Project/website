import styled from 'styled-components';

export const RecommendationsContainer = styled.section`
  padding: 50px;
`;

export const BigTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const SecondaryTitle = styled.h2`
  text-align: center;
  font-weight: 300;
  color: #222222;
`;

export const RecommendationsList = styled.div`
  display: flex;
  margin-block: 40px;
  justify-content: center;
  width: fit-content;
  gap: 30px;
  margin-inline: auto;
  flex-wrap: wrap;

  div {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
`;

export const RecommendationCard = styled.figure`
  width: 300px;
  img {
    border-radius: 2px;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;
