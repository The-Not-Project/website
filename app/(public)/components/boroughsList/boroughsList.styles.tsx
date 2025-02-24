import styled from 'styled-components';

type BoroughsListProps = { $name: string };

const formatName = (name: string) =>
    name
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

export const BoroughsList = styled.ul`
  position: absolute;
  height: 100vh;
  width: 25vh;
  right: -100%;
  top: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const BoroughsListItem = styled.li<BoroughsListProps>`
  height: 300px;
  position: relative;
  background: url(${({ $name }) => `/media/boroughsCards/${$name}.jpg`})
    no-repeat center center/cover;
    cursor: pointer;

  &::after {
    box-sizing: border-box;
    content: '${({ $name }) => `${formatName($name)}`}';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      hsl(0, 0%, 0%, 0.2) 0%,
      hsl(0, 0%, 0%, 0.4) 60%,
      hsl(0, 0%, 0%, 0.6) 100%
    );
    display: flex;
    align-items: flex-end;
    color: white;
    padding: 10px 15px;
    font-size: 2rem;
    text-shadow: 0 0 10px black;
  }
`;
