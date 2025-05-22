import styled from "styled-components";

export const StyledForm = styled.form`
  flex-grow: 1;
`;

export const InputsContainer = styled.div`
  display: flex;
  gap: 10px;

  div {
    flex-grow: 1;
  }
`;

export const FormInput = styled.input`
  display: block;
  font-size: 1.2rem;
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 4px;
  text-indent: 7px;
  margin-bottom: 10px;
  border: 1px solid #ccc;

  &:focus {
    border: 1px solid hsl(103.63636363636368, 30%, 35%);
  }

  &:disabled {
    border-color: transparent;
    background-color: hsl(35, 10%, 90%);
    cursor: not-allowed;
  }
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
  padding-left: 2px;
`;

export const FormButton = styled.button`
    padding: 6px 15px;
    font-size: 1.1rem;
    border-radius: 5px;
    outline: none;
    border-width: 1px;
    background: #485244;
    border-color: #485244;
    color: white;
`;

export const FormButtonOutlined = styled(FormButton)`
    background: transparent;
    color: black;
    background: #eee;
`;

export const ButtonsContainer = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: auto;
`;
