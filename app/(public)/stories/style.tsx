import styled from 'styled-components';

export const StoriesContainer = styled.div`
  display: flex;
  margin-inline: 40px;
  gap: 50px;
  margin-bottom: 50px;

  .highlights img {
    width: 300px;
    margin-top: 10px;
  }

  
  @media (max-width: 1500px) {
      
      .highlights {
        display: none;
      }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding-inline: 60px;
  }
`;
