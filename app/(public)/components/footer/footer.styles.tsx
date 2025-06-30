import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import styled from "styled-components";

export const Footer = styled.footer`
  height: auto;
  background-color: var(--footer-bg);
  color: var(--footer-text);
  width: 100%;
  position: relative;
`;

export const MainContent = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    filter: invert(1);
  }

  @media (max-width: 1000px) {
    img {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 50px;
      height: auto;
    }
  }
`;

export const LogoSection = styled.div``;

export const NavSection = styled.div`
  @media (max-width: 1000px) {
    text-align: center;
    width: 50%;
    margin-block: 20px;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 1rem;

      a {
        color: inherit;
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;

  a {
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
