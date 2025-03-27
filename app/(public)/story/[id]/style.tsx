import styled from 'styled-components';

export const StoryContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 100px;

  .title {
    font-weight: normal;
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: .8rem;
  }

  img {
    width: 100%;
    height: auto;
    margin-block: 20px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-block: 5px 10px;
  }

  .content {
  white-space: pre-line;
}
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 5px;
  
  .divider {
    scale: 0.7;
    color: gray;
  }

  span {
    text-decoration: underline;
  }
`;