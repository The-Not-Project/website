import styled from 'styled-components';

type RadarDescriptionProps = { $isVisible: boolean; $url: string };

export const RadarCardContainer = styled.section`
  display: flex;
  max-width: 1920px;
  height: calc(50vw - 80px);
  max-height: 900px;
  margin: 40px auto;
  padding-inline: 40px;
  overflow: hidden;
`;

export const RadarDescription = styled.div<RadarDescriptionProps>`
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  width: ${({ $isVisible }) => ($isVisible ? '50%' : '100%')};
  height: 100%;
  position: relative;
  transition: 0.3s ease-out;
  background: #454d42;

  .title {
    text-wrap: balance;
    font-size: clamp(2rem, 3rem, 3vw);
    transition: opacity 0.3s ease-out 0.5s;
    opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  }

  .summary {
    font-size: clamp(1rem, 2rem, 1.5vw);
    font-style: italic;
    transition: opacity 0.3s ease-out 0.5s;
    opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  }

  .author {
    position: absolute;
    bottom: 30px;
    font-size: 1.5rem;
    transition: opacity 0.3s ease-out 0.5s;
    opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  }

  .overlay {
    background: url(${({ $url }) => $url}) no-repeat center center/cover;
    background-size: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease-out;
    opacity: ${({ $isVisible }) => ($isVisible ? '0' : '1')};

    &::after {
      content: 'Our Radar';
      background: hsl(104, 8%, 25%, 0.7);
      color: hsl(104, 8%, 90%);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      backdrop-filter: blur(5px) contrast(1.5);
    }
  }
`;

export const RadarPhoto = styled.div<{$url: string}>`
  flex-grow: 1;
  background: url(${({ $url }) => $url}) no-repeat center center/cover;
  transition: 0.3s ease-out;
`;
