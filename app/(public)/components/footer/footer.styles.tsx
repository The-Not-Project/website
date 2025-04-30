import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import styled from "styled-components";

export const Footer = styled.footer`
  height: auto;
  background-color: #454c42;
  color: white;
  width: 100%;
  overflow: hidden;
`;

export const MainContent = styled.div`
  padding: 2rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  img {
    filter: invert(1);
  }
`;

export const LogoSection = styled.div``;

export const NavSection = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
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
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.25rem 1rem;
    border: 1px solid rgba(255, 255, 255, 255);
    border-radius: 2rem;
    background: transparent;
    color: white;
    font-size: 0.85rem;
    width: 250px;
    height: 40px;
    &::placeholder {
      color: rgba(255, 255, 255, 255);
    }
    &:focus {
      outline: none;
    }
  }

  button {
    padding: 0.25rem 1rem;
    border: 1px solid rgba(255, 255, 255, 255);
    border-radius: 2rem;
    background: transparent;
    color: white;
    font-size: 0.85rem;
    width: 100px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s;
    align-self: flex-start;

    &:hover {
      background: white;
      color: #454c42;
    }
  }
`;

export const SignUp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 0.5rem 0;
`;

export const ConsentText = styled.p`
  font-size: 11px !important;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  max-width: 700px;
  width: 100%;

  a {
    color: white;
    text-decoration: underline;
  }
`;

export const BottomBar = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 1.2rem;
`;

export const Instagram = styled(FaInstagram)`
  font-size: 1.2rem;
`;

export const X = styled(FaXTwitter)`
  font-size: 1.2rem;
`;
export const LegalLinks = styled.div`
  display: flex;
  gap: 25px;

  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Copyright = styled.p`
  font-size: 1rem;
`;
