import styled from "styled-components";
import { FaXmark } from "react-icons/fa6";

export const BoroughSelectionContainer = styled.nav`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  max-width: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  width: max-content;
  padding: 10px;
  border-radius: 200px;
  overflow: hidden;
  position: unset;

  @media (max-width: 600px) {
    height: 100dvh;
    border-radius: 0;
    position: fixed;
    padding-block: 50% 20%;
    top: 0;
    width: 100%;
    z-index: 3;
    backdrop-filter: blur(20px) brightness(0.4);
    -webkit-backdrop-filter: blur(5px);
    transition: 0.3s;
    animation: fadeIn 0.2s forwards;

    &.invisible {
      pointer-events: painted;
      animation: fadeOut 0.2s forwards;
    }
  }

  ul {
    display: flex;
    list-style: none;
    color: white;
    font-size: clamp(1rem, 2vw, 1.5rem);
    gap: 25px;

    li {
      color: lightgray;
      transition: 0.2s;

      &.nyc {
        margin-top: auto;
      }

      &.active,
      &:hover {
        color: white;
        filter: none;
        text-shadow: 0 0 20px white;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
    @media (max-width: 600px) {
      flex-flow: column;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      transition: 0.2s;

      &.invisible {
        gap: 0;
      }
    }
  }
`;

export const CloseIcon = styled(FaXmark)`
  color: white;
  position: absolute;
  right: 30px;
  top: 30px;
  font-size: 2rem;
`;
