import styled from 'styled-components';

export const StoriesListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  height: max-content;

  @media (max-width: 850px) {
      gap: 20px;
    }
`;

export const NoStoriesMessage = styled.p`
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  `