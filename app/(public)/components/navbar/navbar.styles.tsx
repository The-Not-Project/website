import NextLink from 'next/link';
import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 40px;
  height: 80px;
  border-bottom: 2px solid var(--bg-color);
  transition: 0.3s;
  background: var(--bg-color);
  color: black;
  &.isSpecialPage {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100
  }

  &.solid {
    border-color: #ddd;
    background: transparent;
    color: white;

    img {
      filter: invert(1);
    }
  }

  .title-lg {
    font-size: 2.5rem;
    font-weight: normal;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const DonateButton = styled.button`
  background: transparent;
  color: black;
  outline: none;
  border: 2px solid black;
  padding: 1px 10px;
  border-radius: 100px;
  font-size: 1.2rem;
  cursor: pointer;

  &.solid {
    color: white;
    border-color: white;
  }
`;
export const Link = styled(NextLink)`
  color: black;
  text-decoration: none;
  margin-inline: 10px;

  &.solid {
    color: white;
  }
`;
export const AuthLink = styled.a`
  color: black;
  text-decoration: none;
  margin-inline: 10px;

  &.solid {
    color: white;
  }
`;
