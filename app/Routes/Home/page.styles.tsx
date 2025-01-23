import styled from 'styled-components';

type HeaderBackgroundProps = { $position: number };

type NavBarProps = { $transparency: boolean };

type RadarOverlayProps = { $shrink: boolean };

export const Header = styled.header`
  display: block;
  height: 100dvh;
  color: white;

  position: relative;
  text-shadow: 0 0 20px black;

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

export const HeaderBackground = styled.div.attrs<HeaderBackgroundProps>(props => ({
  style: {
    backgroundPositionY: `${props.$position}px`,
  },}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/media/loop-gif.gif') no-repeat center center/cover;
  background-attachment: fixed;
  translate: 0;
`;

export const NavBar = styled.nav<NavBarProps>`
  display: flex;
  justify-content: space-between;
  background: ${({ $transparency }) =>
    $transparency ? 'transparent' : 'white'};
  border-bottom: 2px solid;
  color: ${({ $transparency }) => ($transparency ? 'white' : 'black')};
  align-items: center;
  padding-inline: 40px;
  height: 80px;
  border-bottom: 2px solid white;
  position: sticky;
  top: 0;
  transition: 0.3s;
  text-shadow: none;
  z-index: 1;

  img {
    filter: invert(${({ $transparency }) => ($transparency ? '1' : '0')});
  }

  .title-lg {
    font-size: 2.5rem;
  }
`;

export const DonateButton = styled.button<NavBarProps>`
  background: transparent;
  color: ${({ $transparency }) => ($transparency ? 'white' : 'black')};
  outline: none;
  border: 2px solid
    ${({ $transparency }) => ($transparency ? 'white' : 'black')};
  padding: 1px 10px;
  border-radius: 100px;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const RadarSection = styled.section`
  display: flex;
  height: 50vw;
  margin: 40px;
  overflow: hidden;
`;

export const RadarOverlay = styled.div<RadarOverlayProps>`
  display: flex;
  width: ${({ $shrink }) => ($shrink ? '50%' : '100%')};
  align-items: center;
  justify-content: center;
  color: white;
  height: 100%;
  font-size: 3rem;
  position: relative;
  transition: 0.3s ease-out;
  background: #454d42;

  .overlay {
    background: url('/media/harlemPic\ 1.png') no-repeat center center/cover;
    background-size: 90vw;
    filter: blur(5px) contrast(1.3);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s ease-out;
    opacity: ${({ $shrink }) => ($shrink ? '0' : '1')};

    &::after {
      content: 'Our Radar';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: hsl(104, 8%, 25%);
      opacity: 0.7;
      z-index: 1;
    }
  }
`;

export const RadarPhoto = styled.div`
  flex-grow: 1;
  background: url('/media/harlemPic\ 1.png') no-repeat center center/cover;
  transition: 0.3s ease-out;
`;
