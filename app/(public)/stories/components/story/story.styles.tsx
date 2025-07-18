import styled from "styled-components";

export const StoryContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  padding-block: 5px;
  border-bottom: 1px solid gray;

  img {
    object-fit: cover;
    width: 280px;
    min-width: 280px;
    height: 150px;
    margin-block: 10px;
  }

  @media (max-width: 850px) {
    gap: 15px;
    height: 90px;
    border: none;
    padding: 0;

    img {
      width: 35%;
      min-width: 35%;
      height: 100%;
      border-radius: 5px;
      margin: 0;
    }
  }
`;

export const StoryContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .createdAt {
    margin-top: auto;
    color: #3b3b3b;
  }

  .title {
    font-size: 1.7rem;
    font-weight: normal;

    a {
      color: black;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 850px) {
    order: 1;
    justify-content: center;
    gap: 10px;

    .info {
      display: flex;
    }

    .title {
      font-size: 1.4rem;
    }

    .createdAt {
      display: inline;
      font-size: 0.8rem;
      margin: 0;
    }
 
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 5px;
  font-size: 0.9rem;
  text-decoration: underline;
  

  .divider {
    scale: 0.7;
    color: gray;
  }

  span {
  }

  @media (max-width: 850px) {
    font-size: 0.8rem;
    color: #3b3b3b;
    text-decoration: none;
    }
`;
