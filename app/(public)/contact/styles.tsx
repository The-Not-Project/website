import styled from "styled-components";
<<<<<<< HEAD

export const ContactContainer = styled.main`
  padding-block: 20px;
  display: flex;
  align-items: center;
  background: url("media/texture.png") no-repeat center center/cover;
  color: white;
=======
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
  padding: 80px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  gap: 100px;
>>>>>>> b296d47fb34ec12cdc05ebf4ff1eabf6df62daf6

  @media (max-width: 850px) {
    padding: 20px;
    gap: 50px;
    margin-block: 20px;
  }
`;
<<<<<<< HEAD

export const FormImage = styled.img`
  width: 40%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;
=======
>>>>>>> b296d47fb34ec12cdc05ebf4ff1eabf6df62daf6
