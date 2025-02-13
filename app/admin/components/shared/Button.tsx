// components/shared/Button.tsx
'use client';

import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  font-size: 1.1rem;
  width: 60px;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background: black;
  color: white;

  &.inverted {
    color: black;
    background: transparent;
    border: 2px black solid;
  }

  &.block {
    display: block;
    width: max-content;
    padding-inline: 7px;
  }

  &.cornered {
    display: block;
    margin: 20px 10px 0 auto;
  }
`;
