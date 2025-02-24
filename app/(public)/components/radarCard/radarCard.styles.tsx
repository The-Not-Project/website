import styled from 'styled-components';

type RadarDescriptionProps = { $isVisible: boolean; url: string };

export const RadarCardContainer = styled.section`
  display: flex;
  height: 50vw;
  margin: 40px;
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
    font-size: 3rem;
    transition: 0.3s ease-out;
    transition-delay: 0.5s;
    opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  }

  .summary {
    font-size: 2rem;
    font-style: italic;
    transition: 0.3s ease-out;
    transition-delay: 0.5s;
    opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  }

  .author {
    position: absolute;
    bottom: 30px;
    font-size: 1.5rem;
    transition: 0.3s ease-out;
    transition-delay: 0.5s;
    opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  }

  .overlay {
    background: url(${({ url }) => url}) no-repeat center center/cover;
    background-size: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s ease-out;
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

export const RadarPhoto = styled.div<{url: string}>`
  flex-grow: 1;
  background: url(${({ url }) => url}) no-repeat center center/cover;
  transition: 0.3s ease-out;
`;
