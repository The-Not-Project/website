import styled from 'styled-components';

export const BoroughsSectionContainer = styled.section`
  height: 100vh;
  max-height: 60vw;
  position: relative;
  color: white;
  text-shadow: 0 0 20px hsl(0, 0%, 0%);

  @media (max-width: 600px) {
    height: max-content;
    max-height: unset;
    padding-top: 40px;
    box-sizing: content-box;
    background: linear-gradient(var(--bg-color), hsl(35, 46%, 95%, 0.3) 20%, hsl(35, 46%, 95%, 0.3) 80%, var(--bg-color));


    .background-slideshow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
    }
    
    .slide-track {
      display: flex;
      width: 500vw;
      height: 100%;
      animation: slide 20s linear infinite;
    }
    
    .slide-track img {
      width: 100vw;
      height: 100%;
      object-fit: cover;
      filter: blur(5px) brightness(50%) grayscale(70%);
    }

    /* Animation */
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-500vw);
      }
    }
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(var(--bg-color), transparent);
  }

  animation: fadepulsatefast 0.66s;
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
    transition: translate 1s;

    &.active {
      filter: none;
      scale: 1.1;
      translate: ${({x}) => x}% ${({y}) => y}%;
      }

      &.blurred {
        filter: blur(5px) brightness(50%) grayscale(70%);
      }
  }
`;
