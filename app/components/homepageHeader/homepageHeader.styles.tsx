import styled from 'styled-components';

type HeaderBackgroundProps = { $position: number };

export const HeaderContainer = styled.header`
  display: block;
  height: 100dvh;
  color: white;
  position: relative;
  text-shadow: 0 0 20px black;
  padding-top: 80px;

  .quote {
    position: absolute;
    margin: 20px;
    font-size: 2rem;
    width: 300px;
  }

  .center-title {
    text-align: center;
    position: absolute;
    font-size: 4rem;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
`;

export const HeaderBackground = styled.div.attrs<HeaderBackgroundProps>(
  props => ({
    style: {
      backgroundPositionY: `${props.$position}px`,
    },
  })
)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/media/loop-gif.gif') no-repeat center center/cover;
  background-attachment: fixed;
  translate: 0;
`;