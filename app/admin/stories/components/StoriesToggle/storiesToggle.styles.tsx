import styled from "styled-components";

export const ToggleContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    background: #d3d3d3;
    padding: 5px;
    border-radius: 5px;
  }

  @media (max-width: 850px) {
    right: 0px;
    top: 8px;
  }
`;
