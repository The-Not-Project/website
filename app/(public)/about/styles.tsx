import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: block;
  max-height: auto;
  width: 100%;
  color: white;
`;

export const HeaderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 40vh;
  @media (max-width: 1000px) {
    max-height: none;
  }
`;

export const AboutContainer = styled.div`
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  h1 {
    font-size: 2rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2rem, 1vw);
    max-width: 60%;
  }

  @media (max-width: 1000px) {
    p {
      max-width: none;
    }
  }
`;

export const WhatWeDoContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const WhatWeDoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 3rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2rem, 1vw);
    padding-bottom: 1rem;
  }

  @media (max-width: 1000px) {
    padding: 2rem 0rem;
    width: 100%;
  }
`;

export const WhatWeDoImage = styled.img`
  object-fit: cover;
  width: 50%;
  height: auto;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const WhatWeDoDifferentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const WhatWeDoDifferentContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 3rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2rem, 1vw);
    padding-bottom: 1rem;
  }

  @media (max-width: 1000px) {
    padding: 2rem 0rem;
    width: 100%;
  }
`;

export const WhatWeDoDifferentImage = styled.img`
  object-fit: cover;
  width: 50%;
  height: auto;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const WhoIsItForContainer = styled.div`
  margin: 2rem;
  height: 90vh;
  background-image: url("/media/thePeople.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 2rem 0rem;
    height: 70vh;
  }
`;

export const WhoIsItForContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f3ec;
  height: 50vh;
  width: 50vh;
  padding: 3rem;

  h1 {
    font-size: 1.5rem;
    padding: 1rem;
  }

  p {
    font-size: clamp(1rem, 2rem, 1vw);
  }

  @media (max-width: 1000px) {
    height: 40vh;
    width: 40vh;
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;
