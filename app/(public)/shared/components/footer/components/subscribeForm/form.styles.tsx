import styled from "styled-components";

export const SubscribeSection = styled.div`

  & + p {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
`;

export const SubscribeForm = styled.form`

  input {
    display: block;
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
    font-size: 0.85rem;
    width: 250px;
    height: 25px;
    margin-bottom: 15px;
    outline: none;


    @media (max-width: 1000px) {
      width: 100%;
    }

    &::placeholder {
      color: #00000090;
    }
  }

  button {
    margin-top: 15px;
    padding: 0.25rem 1rem;
    border: 1px solid black;
    border-radius: 2rem;
    background: transparent;
    color: black;
    font-size: 0.85rem;
    width: 100px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s;
    align-self: flex-start;

    &:disabled {
      background: red;
    }
  }
`;

export const CaptchaNotice = styled.p`
  font-size: 0.7rem;
  color: #00000090;
  margin-top: 10px;

  a {
    color: #00000090;
    text-decoration: underline;
    display: inline;
  }
`;