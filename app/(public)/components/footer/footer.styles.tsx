import { FaInstagram, FaYoutube } from "react-icons/fa6";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Foot3r = styled.div`
  height: 500px;
  background-color: #454c42;
  color: white;
  align-items: center;
  padding: 4rem 2rem 2rem;
  width: 100%;
`;

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  gap: 2rem;
  margin-bottom: 4rem;

  img {
    filter: invert(1);
  }
`;

export const LogoSection = styled.div``;

export const NavSection = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;

      a {
        color: white;
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const SignUpSection = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;

    input {
      padding: 0.75rem 1rem;
      border: 1px solid rgba(255, 255, 255, 255);
      border-radius: 2rem;
      background: transparent;
      color: white;
      font-size: 1rem;
      gap: 5px;
      width: 150px;
      margin: 0px;

      &::placeholder {
        color: rgba(255, 255, 255, 255);
      }
    }

    button {
      padding: 0.75rem 2rem;
      border: 1px solid white;
      border-radius: 2rem;
      background: transparent;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s;
      align-self: flex-start;

      &:hover {
        background: white;
        color: #454c42;
      }
    }
  }
`;

export const SignUp = styled.div`
  gap: 10px;
`;

export const ConsentText = styled.div`
  font-size: 12px !important;
  line-height: 1.5;

  a {
    color: white;
    text-decoration: underline;
  }
`;

export const BottomBar = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: white;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Youtube = styled(FaYoutube)`
  font-size: 25px;
`;

export const Instagram = styled(FaInstagram)`
  font-size: 25px;
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Copyright = styled.div`
  font-size: 1rem;
  opacity: 0.8;
`;
