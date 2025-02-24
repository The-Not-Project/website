import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  width: 25vh;
  color: #ede0cd;
`;

export const Sidebar = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: hsl(105, 7%, 30%);
  padding-block: 20px;
`;

export const CloseButton = styled.button`
  margin-left: 30px;
  background: none;
  color: #ede0cd;
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.2s;
  position: relative;

  &::after {
    content: 'CLOSE';
    position: absolute;
    top: 50%;
    left: 50px;
    translate: 0 -55%;
    font-size: 0.9rem;
    letter-spacing: 1px;
    color: #ede0cd;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover {
    background: hsl(0, 0%, 50%, 0.4);
    &::after {
      opacity: 1;
    }
  }
`;

export const SidebarList = styled.ul`
  list-style: none;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 2rem;
`;

export const SidebarListItem = styled.li`
  padding: 5px 30px;
  position: relative;
  transition: .2s;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background: white;
    transition: .2s;
  }
  &:hover {
    color: white;
    &::after {
      width: 100%;
    }
  }
`;
