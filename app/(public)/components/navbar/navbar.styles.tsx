import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding-inline: 40px;
  height: 80px;
  border-bottom: 2px solid#ddd;
  position: fixed;
  width: 100%;
  top: 0;
  transition: 0.3s;
  text-shadow: none;
  z-index: 1;


  &.scrolled {
    border-color: var(--bg-color);
    background: var(--bg-color);
    color: black;

    img {
      filter: invert(1);
    }

  }

  .title-lg {
    font-size: 2.5rem;
    font-weight: normal;
    text-align: center;
  }
`;

export const DonateButton = styled.button`
  background: transparent;
  color: white;
  outline: none;
  border: 2px solid white;
  padding: 1px 10px;
  border-radius: 100px;
  font-size: 1.2rem;
  cursor: pointer;

  &.scrolled {
    color: black;
    border-color: black;
  }
  `;
export const AuthLink = styled.a`
  color: white;
  text-decoration: none;
  margin-inline: 10px;
  
  &.scrolled {
    color: black;
    border-color: black;
  }

`