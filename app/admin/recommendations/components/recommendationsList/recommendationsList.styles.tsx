import styled from 'styled-components';

export const RecommendationsListContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const RecommendationContainer = styled.div`
  background: white;
  position: relative;
  height: 185.5px;

  h3 {
    font-weight: normal;
    padding-left: 10px;
    margin-top: 5px;
  }
  h4 {
    font-weight: normal;
    font-size: .8rem;
    line-height: .8rem;
    color: #525252;
    padding-left: 10px;
    margin-bottom: 7px;
  }

  p {
    color: #b10000;
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;

    &.green {
      color: green;
    }
  }

`;

export const ImageContainer = styled.img`
  width: 200px;
  height: 133px;
  object-fit: cover;
`;
