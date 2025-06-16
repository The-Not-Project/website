import styled from "styled-components";

export const FormContainer = styled.form`
  h2 {
    font-weight: normal;
    font-size: 2.3rem;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 850px) {
      font-size: 2rem;
    }
  }

  label {
    display: block;
    font-size: 1.1rem;
  }

  input:not([type="checkbox"]) {
    width: 300px;
    height: 40px;
    font-size: 1.1rem;
    text-indent: 5px;

    border-radius: 25px;
    border: 1px solid #ccc;
  }

  input[type="checkbox"] {
    width: auto;
    height: auto;
    margin-right: 5px;
    scale: 1.1;
  }

  textarea {
    margin-block: 15px 20px;
    width: 100%;
    height: 200px;
    font-size: 1.1rem;
    text-indent: 5px;
    border-radius: 25px;
  }

  button {
    display: block;
    font-size: 1.1rem;
    padding: 5px 10px;
    background: black;
    color: white;
    border-radius: 4px;
  }
`;
