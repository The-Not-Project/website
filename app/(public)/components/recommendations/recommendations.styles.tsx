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
  gap: 30px;
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

export const RecommendationCardContainer = styled.figure`
  width: 300px;
  height: 400px;
  background: white;
  display: flex;
  flex-flow: column;
  background: var(--cards-bg);
  color: var(--cards-text);

  @media (max-width: 600px) {
    scroll-snap-align: center;
    flex: 0 0 100%;
  }

  .content {
    padding: 15px 25px;
    min-height: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
    transition: 0.2s;
    cursor: pointer;

    &.expanded {
      height: 100%;
    }
    a {
      color: black;
      font-size: 1.1rem;
      display: block;
      margin-top: auto;
    }

    .categories {
      color: var(--accent-text);
      font-size: 0.9rem;
    }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: normal;
  }

  .summary {
    rotate: x 90deg;
    overflow: hidden;
    transition: rotate 0.2s, opacity 0.1s;
    opacity: 0;
    &.expanded {
      opacity: 1;
      rotate: none;
      transition: rotate 0.3s, opacity 0.5s;
    }
  }
`;

export const ImageDiv = styled.div<{ $src: string }>`
  height: 100%;
  background: url(${({ $src }) => $src}) no-repeat center center/cover;
  transition: 0.2s;
  position: relative;
  &.expanded {
    height: 35%;
  }

  .date {
    position: absolute;
    top: 0;
    left: 0;
    translate: 15px 10px;
    color: white;
    text-shadow: 0 0 10px black;
    font-size: 1.2rem;
    z-index: 2;
  }
`;
