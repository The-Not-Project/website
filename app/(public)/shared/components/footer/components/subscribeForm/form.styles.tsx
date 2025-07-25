import styled from "styled-components";

export const SignUpSection = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.25rem 1rem;
    border: 1px solid white;
    border-radius: 2rem;
    background: transparent;
    color: white;
    font-size: 0.85rem;
    width: 250px;
    height: 40px;
    outline: none;

    @media (max-width: 1000px) {
      width: 100%;
    }

    &::placeholder {
      color: #ccc;
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
  gap: 10px;
  padding: 0.5rem 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ConsentText = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  max-width: 700px;
  width: 100%;

  span {
    text-decoration: underline;
  }
`;