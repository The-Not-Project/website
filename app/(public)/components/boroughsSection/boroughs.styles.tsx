import styled from "styled-components";
import NextLink from "next/link";

export const BoroughsSectionContainer = styled.section`
  height: 100vh;
  max-height: 60vw;
  position: relative;
  color: white;
  text-shadow: 0 0 20px hsl(0, 0%, 0%);
  overflow: hidden;

  @media (max-width: 600px) {
    height: max-content;
    max-height: unset;
    box-sizing: content-box;
    background: linear-gradient(
      var(--bg-color),
      hsl(35, 46%, 95%, 0.3) 20%,
      hsl(35, 46%, 95%, 0.3) 80%,
      var(--bg-color)
    );
    padding-block: 40px 60px;
  }

  h1 {
    font-size: clamp(3rem, 5rem, 4vw);
    position: absolute;
    font-weight: 500;
    top: 10%;
    left: 10%;
  }

  .description {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 30%;
    text-align: center;

    h2 {
      font-size: clamp(3rem, 5rem, 3.5vw);
      font-weight: 500;
      margin-bottom: 20px;
    }

    p {
      font-size: clamp(1rem, 2rem, 2vw);
    }

    animation: fadepulsateslow 1s;
  }
`;

export const Background = styled.div<{ $fileName: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $fileName }) =>
      `url('/media/boroughBackdrops/${$fileName}.jpg') no-repeat center center/cover`};
    filter: grayscale(50%);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(var(--bg-color), transparent);
  }

  animation: fadepulsatefast 0.66s;

  @media (max-width: 600px) {
    z-index: -1;
    animation-duration: 0.5s;
    ${({ $fileName }) =>
      $fileName !== "nyc" &&
      `
      &::after {
        background: none;
      }`
    }
  }
`;

export const SVGContainer = styled.div`
  width: 35%;
  max-width: 60vh;
  position: absolute;
  right: 2%;
  bottom: 2%;

  @media (max-width: 600px) {
    width: 80%;
    position: unset;
    margin: 0 auto;
    width: 100%;
  }

  svg {
    width: 100%;
    height: auto;
  }
`;

export const Path = styled.path<{ x: number; y: number }>`
  transition: 0.2s;
  cursor: pointer;

  @media (min-width: 600px) {
    fill: hsl(36, 47%, 95%, 0.4);

    &.active {
      opacity: 1;
      filter: none;
      fill: hsl(36, 47%, 95%, 0.9);
      stroke: hsl(0, 0%, 0%, 0.5);
      filter: drop-shadow(0 0 20px hsl(36, 47%, 0%, 0.5));
    }
  }

  @media (max-width: 600px) {
    stroke: hsl(0, 0%, 0%, 0);
    transition: 0.2s;
    &.active {
      filter: none;
      scale: 1.1;
      translate: ${({ x, y }) => `${x}% ${y}%`};
      opacity: 0.8;
    }

    &.hidden {
      display: none;
    }
  }
`;

export const BoroughPopup = styled.div`
  position: absolute;
  background: hsl(35, 46%, 95%, 0.9);
  text-shadow: none;
  color: black;
  width: 100%;
  border-radius: 3px;
  text-align: center;
  padding: 20px;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const Link = styled(NextLink)`
  color: black;
  font-size: 1.2rem;
`;
