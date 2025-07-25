import styled from "styled-components";
import Image from "next/image";

export const HeaderContainer = styled.div`
  display: block;
  max-height: auto;
  width: 100%;
  color: white;
`;

export const HeaderImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 40vh;
  filter: grayscale(100%);
  @media (max-width: 1000px) {
    max-height: none;
  }
`;

export const ContactContainer = styled.main`
  max-width: 850px;
  margin: 40px auto;


  @media (max-width: 850px) {
    padding: 20px;
    margin-block: 20px;
  }
`;
