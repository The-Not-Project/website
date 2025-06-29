import styled from "styled-components";

export const ContactContainer = styled.main`
  padding-block: 20px;
  display: flex;
  align-items: center;
  background: url("media/texture.png") no-repeat center center/cover;
  color: white;

  @media (max-width: 850px) {
    padding: 20px;
    gap: 50px;
    margin-block: 20px;
  }
`;

export const FormImage = styled.img`
  width: 40%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;
