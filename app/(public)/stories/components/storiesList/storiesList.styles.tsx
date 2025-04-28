import styled from 'styled-components';

export const StoriesListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 600px) {
      gap: 20px;
    }
`;

export const NoStoriesMessage = styled.p`
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  `