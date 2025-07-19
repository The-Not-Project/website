import styled from "styled-components";

export const RecommendationsContainer = styled.section`
  padding: 50px;
  @media (max-width: 600px) {
    padding-inline: 0;
  }
`;

export const BigTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 5px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
`;

export const SecondaryTitle = styled.h2`
  text-align: center;
  font-weight: 300;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    text-wrap: balance;
  }
`;

export const RecommendationsList = styled.div`
  display: flex;
  margin-block: 40px;
  justify-content: center;
  width: fit-content;
  /* gap: 30px; */
  margin-inline: auto;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    gap: 30px;
    overflow-x: scroll;
    max-width: 100vw;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
    padding-inline: 50px;
  }
`;

export const RecommendationCardContainer = styled.div`
  width: 400px;
  padding: 40px 35px;
  display: flex;
  flex-flow: column;
  background: transparent;
  border: 2px solid #9d9d9d;
  margin-left: -2px;

  .first-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    font-size: 0.8rem;
    color: #454545;
    
    .category {
      border: 1.5px solid #454545;
      text-transform: uppercase;
      font-size: 0.7rem;
      padding: 2px 7px;
      border-radius: 50px;
    }
  }

  img {
    width: 100%;
    aspect-ratio: 16 / 11;
    height: auto;
    object-fit: cover;
    margin-bottom: 15px;
  }


  /* @media (max-width: 600px) {
    scroll-snap-align: center;
    flex: 0 0 100%;
  } */

  .content {
    .title {
      font-size: 1.6rem;
      font-weight: normal;
    }

    .summary {
      margin-block: 10px;
      color: #454545;
      line-height: 1.4em;
    }
  }

  a {
    width: fit-content;
    color: #454545;
    margin-top: auto;
    text-transform: uppercase;
    font-size: 0.8em;
    text-decoration: none;
    border-bottom: 1.3px solid #454545;
  }
`;
