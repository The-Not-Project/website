import styled from "styled-components";

export const FormContainer = styled.form`
  flex-grow: 1;
  padding: 30px 5% 30px 80px;
  h2 {
    font-weight: normal;
    font-size: 2.3rem;
    margin-bottom: 20px;

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

    border-radius: 4px;
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
    height: 250px;
    font-size: 1.1rem;
    text-indent: 5px;
  }

  button {
    display: block;
    font-size: 1.1rem;
    padding: 5px 10px;
    background: white;
    color: black;
    border-radius: 4px;
  }

  select {
    width: 300px;
    height: 40px;
    font-size: 1.1rem;
    text-indent: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
`;
