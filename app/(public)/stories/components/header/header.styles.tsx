import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $filename: string }>`
  height: 70dvh;
  background: url(${({ $filename }) => `media/boroughBackdrops/${$filename}.jpg`})
    center center no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 20px;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(hsl(0, 0%, 0%, 0.2) 60%, var(--bg-color));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
`;

export const BoroughDescription = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  color: white;
  font-size: 2.2rem;
  text-align: center;
  width: 50%;
  text-shadow: 0 0 20px black;
  text-wrap: balance;
`;
