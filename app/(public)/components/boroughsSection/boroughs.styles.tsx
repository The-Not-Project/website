import styled from "styled-components";
import NextLink from "next/link";

export const BoroughsSectionContainer = styled.section`
  height: calc(100vh - 80px);
  max-height: 60vw;
  position: relative;
  color: white;
  text-shadow: 0 0 20px hsl(0, 0%, 0%, 0.3);
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
    top: 5%;
    left: 10%;
  }

  .description {
    text-align: center;


    h2 {
      margin-top: 10px;
      font-size: 10vw;
      font-weight: 500;
      text-transform: uppercase;
      color: white;
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
  z-index: -1;

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
    animation: none;
    ${({ $fileName }) =>
      $fileName !== "nyc" &&
      `
      &::after {
        background: none;
      }`}
  }
`;

export const SVGContainer = styled.div`
  height: 70%;
  width: auto;
  position: absolute;
  left: 50%;
  bottom: 0;
  translate: -50%;

  @media (max-width: 600px) {
    position: unset;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    translate: -50%;
    translate: none;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Path = styled.path<{ x: number; y: number }>`
  cursor: pointer;

  @media (min-width: 600px) {
    fill: hsl(36, 47%, 95%, 0.8);

    &.active {
      fill: hsl(36, 47%, 95%);
      stroke: hsl(0, 0%, 0%, 0.5);
      filter: drop-shadow(0 0 20px hsl(36, 47%, 0%, 0.5));
    }
  }

  @media (max-width: 600px) {
    stroke: hsl(0, 0%, 0%, 0);
    transition: 0.2s;
    &.active {
      scale: 1.1;
      translate: ${({ x, y }) => `${x}% ${y}%`};
      opacity: 0.8;
    }
    
    &.shrinking {
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
    text-transform: capitalize;
  }
`;

export const Link = styled(NextLink)`
  color: black;
  font-size: 1.5rem;
`;
