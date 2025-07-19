import styled from 'styled-components';

export const StoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 100px 70px;

  @media (max-width: 850px) {
    width: 100%;
    padding: 10px 20px 20px;

    .title {
      margin-top: 10px;
      font-size: 2.4rem !important;
    }
  }

  .title {
    font-weight: normal;
    font-size: 4rem
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-block: 20px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-block: 5px 20px;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 5px;
  position: relative;
  margin-bottom: 20px;
  
  .divider {
    scale: 0.7;
    color: gray;
  }

  span {
    text-decoration: underline;
  }
`;

export const SaveButton = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: flex-start;

  span {
    text-decoration: none;
    font-size: 1rem;
    margin-right: 5px;
    opacity: 0;
    transition: .1s;  
    pointer-events: none;
    &.visible {
      opacity: 1;
    }
  }

  @media (max-width: 850px) {
    font-size: 1.1rem;
    top: 5px;
    right: 0;
  }
`