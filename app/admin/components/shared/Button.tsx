import styled from 'styled-components';
import { FaXmark } from 'react-icons/fa6';

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  font-size: 1.1rem;
  /* width: 60px; */
  padding: 5px 10px;
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

export const CloseButton = styled(FaXmark)`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  font-size: 2rem;
  padding: 5px;
  color: #4b4b4b;
  border-radius: 20px;
  transition: all.2s;

  &:hover {
    background: #e6e6e6;
  }
`;
