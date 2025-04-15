import styled from 'styled-components';

type HeaderBackgroundProps = { $position: number };

export const HeaderContainer = styled.header`
  display: block;
  height: 100vh;
  max-height: 70vw;
  color: white;
  position: relative;
  text-shadow: 0 0 20px black;
  padding-top: 80px;

  @media (max-width: 600px) {
    max-height: none;
  }

  .quote {
    position: absolute;
    margin: 20px;
    font-size: 2rem;
    width: 300px;
  }

  .center-title {
    text-align: center;
    position: absolute;
    font-size: 3vw;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

    @media (max-width: 600px) {
      font-size: 7vw;
      text-wrap: balance;
    }
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  translate: 0;
  overflow: hidden;
`;

export const HeaderVideo = styled.video.attrs<HeaderBackgroundProps>(
  ({ $position }) => ({
    style: {
      translate: `0 ${$position}px`,
    },
  })
)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
