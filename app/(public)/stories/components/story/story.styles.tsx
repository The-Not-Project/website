import styled from 'styled-components';

export const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 30px;
  transition: 0.2s;
  padding-block: 15px;
  border-bottom: 1px solid gray;

  img {
    object-fit: cover;
    min-width: 280px;
    height: 150px;
  }
`;

export const StoryContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 150px;

  .createdAt {
    margin-top: auto;
    line-height: 0.3rem;
    color: #3b3b3b;
  }

  .title {
    font-size: 1.7rem;
    font-weight: normal;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 5px;
  
  .divider {
    scale: 0.7;
    translate: 0 -2px;
    color: gray;
  }
`;

export const Category = styled.span`
  text-decoration: underline;
  font-size: 0.9rem;
`;
