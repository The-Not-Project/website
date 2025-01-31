import styled from "styled-components";

type NavBarProps = { $transparency: boolean };

export const NavBarContainer = styled.nav<NavBarProps>`
  display: flex;
  justify-content: space-between;
  background: ${({ $transparency }) =>
    $transparency ? 'transparent' : 'var(--bg-color)'};
  color: ${({ $transparency }) => ($transparency ? 'white' : 'black')};
  align-items: center;
  padding-inline: 40px;
  height: 80px;
  border-bottom: 2px solid
    ${({ $transparency }) => ($transparency ? 'var(--bg-color)' : '#ddd')};
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