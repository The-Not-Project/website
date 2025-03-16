import styled from 'styled-components';

export const StoriesContainer = styled.div`
  display: flex;
  margin-inline: 40px;
  gap: 50px;
  margin-block: 50px;

  @media (max-width: 1400px) {
    flex-direction: column;
    padding-inline: 60px;
    gap: 10px;
  }
`;
