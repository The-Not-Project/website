import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: block;
  height: 35vh;
  max-height: 70vw;
  color: white;
  position: relative;
  text-shadow: 0 0 20px black;

  @media (max-width: 600px) {
    max-height: none;
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  translate: 0;
  overflow: hidden;
`;

export const HeaderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const AboutContainer = styled.div`
  padding-left: 30px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  height: 20vh;

  h1 {
    font-size: 40px;
    text-align: left;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    text-align: left;
    text-wrap: balance;
  }
`;

export const WhatWeDoContainer = styled.div`
  display: flex;
  height: 60vh;
  padding: 30px;
  padding-top: 0px;
  gap: 30px;
`;

export const WhatWeDoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  padding: 50px;
  h1 {
    font-size: 40px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    text-wrap: balance;
    padding-bottom: 30px;
  }
`;

export const WhatWeDoImage = styled.img`
  object-fit: cover;
  width: 50%;
  height: 100%;
`;

export const WhatWeDoDifferentContainer = styled.div`
  display: flex;
  height: 60vh;
  padding: 30px;
  padding-top: 0px;
  gap: 30px;
`;

export const WhatWeDoDifferentContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  padding: 60px;
  h1 {
    font-size: 40px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    text-wrap: balance;
    padding-bottom: 30px;
  }
`;

export const WhatWeDoDifferentImage = styled.img`
  object-fit: cover;
  width: 50%;
  height: 100%;
`;

export const WhoIsItForContainer = styled.div`
  height: 30vh;
  color: white;
  background-color: #454c42;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VisionContainer = styled.div``;

export const OurTeamContainer = styled.div`
  height: 60vh;
  color: white;
  background-color: #454c42;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TeamMember = styled.div``;

export const TeamMemberImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const TeamMemberName = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const TeamMemberRole = styled.p`
  font-size: 16px;
`;

export const DonationContainer = styled.div``;