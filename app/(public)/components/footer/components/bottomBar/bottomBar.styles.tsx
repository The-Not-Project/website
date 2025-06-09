import styled from "styled-components";

export const BottomBarContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-inline: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    height: auto;
    padding: 1rem;
    gap: 25px;
    
    p {
      text-align: center;
      width: 100%;
    }
  }
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 1000px) {
    flex: 1 100%;
    justify-content: center;
  }

  p {
    color: white;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;