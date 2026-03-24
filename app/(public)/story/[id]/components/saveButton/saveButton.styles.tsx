import styled from "styled-components";

export const SaveButton = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    font-size: 0.8rem;
    margin-right: 3px;
    opacity: 0;
    transition: 0.1s;
    pointer-events: none;
    text-transform: uppercase;
    letter-spacing: 0.02rem;


    &.visible {
      opacity: 1;
    }
  }

  @media (max-width: 850px) {
    top: 5px;
    right: 0;
  }
`;