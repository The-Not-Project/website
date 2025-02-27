import styled from 'styled-components';

export const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 15px;
  transition: 0.2s;
  cursor: pointer;
  padding: 30px;

  &:hover {
    background-color: hsl(35, 44%, 94%);
    scale: 1.01;

    box-shadow: 0px 25px 60px -28px rgba(0, 0, 0, 0.1);
  }

  img {
    object-fit: cover;
  }
`;

export const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;

  .createdAt {
    color: #963939;
    font-size: 1.2rem;
  }

  .title {
    font-size: 1.7rem;
    font-weight: normal;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Category = styled.span`
  display: inline-block;
  background-color: #e5e5e5;
  border-radius: 5px;
  padding: 3px 10px;
  font-size: .9rem;
`;
