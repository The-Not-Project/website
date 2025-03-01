import styled from 'styled-components';

export const StoryPopupContainer = styled.div<{ $position: number }>`
  position: absolute;
  left: calc(100% + 40px);
  top: ${({ $position }) => `${$position}px`};
  translate: 0 -50%;
  width: 500px;
  height: 500px;
`;

export const Title = styled.h1`
  position: absolute;
  left: 0;
  top: 0;
  width: 500px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  font-size: 3rem;
  font-weight: 500;
`;
