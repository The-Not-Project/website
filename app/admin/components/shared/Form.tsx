// components/shared/Form.tsx
'use client';

import styled from 'styled-components';

export const FormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
`;

export const FormInput = styled.input`
  display: block;
  margin-block: 4px 15px;
  height: 40px;
  width: 300px;
  text-indent: 5px;
  font-size: 1.2rem;
  border-radius: 5px;
  outline: none;
  border: 1px gray solid;
  background: hsl(36, 47%, 98%);

  &:disabled {
    background: hsl(36, 20%, 90%);
  }
`;

export const FormTextArea = styled.textarea<{ height?: string }>`
  display: block;
  margin-block: 4px 15px;
  min-height: ${props => props.height || '300'}px;
  width: 700px;
  max-width: 100%;
  text-indent: 5px;
  font-size: 1.2rem;
  border-radius: 5px;
  outline: none;
  border: 1px gray solid;
  background: hsl(36, 47%, 98%);

  &:disabled {
    background: hsl(36, 20%, 90%);
  }
`;

export const FormSelect = styled.select`
  display: block;
  margin-block: 4px 15px;
  text-indent: 5px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px gray solid;
  background: hsl(36, 47%, 98%);

  &:disabled {
    background: hsl(36, 20%, 90%);
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  padding: 3px 7px;
  background: lightgray;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background: hsl(0, 0%, 78%);
  }
  &:active {
    background: hsl(0, 0%, 75%);
  }
`;
