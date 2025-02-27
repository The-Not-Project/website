import styled from "styled-components";

export const FooterContainer = styled.footer`
  .footer {
    height: 500px;
    background-color: #454c42;
    color: white;
    align-items: center;
    padding: 4rem 2rem 2rem;
    width: 100%;
  }

  .mainContent {
    max-width: 1200px;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 3fr;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .navSection,
  .supportSection {
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
  }

  .signupSection {
    h2 {
      font-size: 2.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
  }

  .signupForm {
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

  .signup {
    gap: 10px;
  }

  .consentText {
    font-size: 12px !important;
    line-height: 1.5;

    a {
      color: white;
      text-decoration: underline;
    }
  }

  .bottomBar {
    width: 100%;
    margin: 0px;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .socialLinks {
    display: flex;
    gap: 10px;

    a {
      color: white;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .legalLinks {
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
  }

  .copyright {
    font-size: 1rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .mainContent {
      grid-template-columns: 1fr;
    }

    .bottomBar {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }

    .socialLinks,
    .legalLinks {
      justify-content: center;
    }
  }
`;