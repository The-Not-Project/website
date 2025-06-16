import Image from "next/image";
import styled from "styled-components";

export const OurTeamContainer = styled.div`
  margin: 4rem 0rem;
  height: 130vh;
  background-image: url("/media/texture.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: screen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    height: auto;
    padding: 2rem;
  }
`;

export const TeamBanner = styled.div`
  height: 100vh;
  width: 90rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f3ec;

  h1 {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    height: auto;
    width: auto;
    padding: 1rem 0rem;
  }
`;
export const TeamList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const TeamMemberCard = styled.div`
  overflow: hidden;
  position: relative;
  margin: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

export const ProfileImageContainer = styled.figure`
  width: 45vh;
  height: 50vh;
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease;
  filter: grayscale(100%);
  &:hover {
    filter: none;
    scale: 1.05;
  }
`;
