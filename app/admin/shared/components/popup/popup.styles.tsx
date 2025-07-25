import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0;
`;

export const Popup = styled.div`
  position: absolute;
  background-color: #f7f7f7;
  width: min-content;
  height: max-content;
  max-height: 90%;
  overflow-y: overlay;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 20px;
  padding: 1px;
  border: 30px solid #f7f7f7;


  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  
  scrollbar-width: none;    
`;
