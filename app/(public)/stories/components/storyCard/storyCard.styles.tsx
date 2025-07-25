import styled from "styled-components";

export const StoryContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  padding-block: 5px;
  border-bottom: 1px solid gray;

  @media (max-width: 850px) {
    border: none;
    padding: 0;
  }
  
  .desktop-thumbnail {
    object-fit: cover;
    width: 300px;
    min-width: 300px;
    height: 180px;
    margin-block: 10px;
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
  `;

export const MobileStoryBody = styled.div`
  background: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 100px -40px rgba(0,0,0,0.3);
  .first-row {
    display: flex;
    gap: 20px;
    
    img {
      width: 33%;
      aspect-ratio: 4 / 5;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-bottom: 5px;

      h2 {
        font-size: 1.1rem;
      }

      p {
        font-size: 0.9rem;
        color: gray;
      }
    }
  }

  .second-row {
    color: gray;
    font-size: 0.8rem;
    padding-top: 15px;
    padding-inline: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }

  }
`;
