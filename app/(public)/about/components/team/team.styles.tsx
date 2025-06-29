import styled from "styled-components";

export const OurTeamContainer = styled.div`
<<<<<<< HEAD
  margin-block: 4rem;
  background: url("/media/texture.png") no-repeat center center/cover;
  padding: 200px 100px;
  @media (max-width: 1100px) {
    padding: 50px 10px;
    margin-bottom: 0;
=======
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
>>>>>>> b296d47fb34ec12cdc05ebf4ff1eabf6df62daf6
  }
  `;

export const TeamBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
  background-color: #f8f3ec;

  @media (max-width: 1100px) {
    padding: 40px 10px;
  }

  h1 {
    font-size: 2rem;

<<<<<<< HEAD
=======
  @media (max-width: 1000px) {
    height: auto;
    width: auto;
    padding: 1rem 0rem;
>>>>>>> b296d47fb34ec12cdc05ebf4ff1eabf6df62daf6
  }
`;
export const TeamList = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;

<<<<<<< HEAD
  @media (max-width: 1100px) {
=======
  @media (max-width: 1000px) {
    display: flex;
>>>>>>> b296d47fb34ec12cdc05ebf4ff1eabf6df62daf6
    flex-direction: column;
    align-items: center;
<<<<<<< HEAD
    gap: 50px;
=======
>>>>>>> b296d47fb34ec12cdc05ebf4ff1eabf6df62daf6
  }
`;
export const TeamMemberCard = styled.div`
  text-align: center;
  width: 30%;

  @media (max-width: 1100px) {
    width: 100%;
    padding-inline: 10%;
  }
  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
    color: #3b3b3b;
  }
`;

export const ProfileImageContainer = styled.figure`
  margin-bottom: 1.2rem;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 6 / 7;
`;

export const ProfileImage = styled.img`
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
