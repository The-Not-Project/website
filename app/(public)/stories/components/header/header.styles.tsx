import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $filename: string }>`
font-family: "Oswald", sans-serif;
  height: 100dvh;
  max-height: 1000px;
  background: url(${({ $filename }) => `../media/boroughBackdrops/${$filename}.jpg`})
    center center no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 20px;
  padding-top: 90px;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(hsl(0, 0%, 0%, 0.2) 40%, var(--bg-color));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  @media (max-width: 850px) {
    height: 80vh;
    &:before {
      background: none;
      backdrop-filter: brightness(0.5) blur(3px);

    }
  }
`;

export const BoroughDescription = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  color: white;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  text-wrap: balance;
  text-align: center;
  width: 50%;
  text-shadow: 0 0 20px black;
  z-index: 1;

  @media (max-width: 850px) {
    width: 100%;
    padding-inline: 5px;
    /* top: auto;
    bottom: 0;
    translate: -50% -20%; */
    font-size: 1.5rem;
    color: #e6e6e6;

    span {
      font-style: italic;
    }
  }
`;

export const MenuButton = styled.p`
  color: #f7deb1;
  position: absolute;
  left: 50%;
  translate: -50%;
  bottom: 20px;
  font-size: 1.2rem;
  width: max-content;
  text-decoration: underline;
  
  `
