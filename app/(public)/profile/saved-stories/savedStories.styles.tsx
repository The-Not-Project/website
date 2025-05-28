import styled from "styled-components";

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StoryContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  height: 120px;

  @media (max-width: 850px) {
    height: 90px;
  }

  img {
    object-fit: cover;
    width: 40%;
    min-width: 40%;
    height: 100%;
    border-radius: 3px;

  }
`;

export const StoryContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  order: 1;
  justify-content: center;
  gap: 10px;

  .createdAt {
    color: #3b3b3b;
    font-size: 0.9rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: normal;

    a {
      color: black;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .info {
    display: flex;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 5px;
  font-size: 0.9rem;
  .divider {
    scale: 0.7;
    color: gray;
  }

  span {
  }

  color: #3b3b3b;
`;
