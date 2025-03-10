import styled from 'styled-components';

export const BoroughSelectionContainer = styled.nav`
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px); 
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: max-content;
  padding: 10px;
  border-radius: 200px;
  overflow: hidden;

  ul {
    display: flex;
    list-style: none;
    color: white;
    font-size: 1.4rem;
    gap: 25px;

    li {
        cursor: pointer;
        opacity: 0.9;
        filter: blur(1px);
        transition:  .2s;

        &.active, &:hover {
            opacity: 1;
            filter: none;
            text-shadow: 0 0 20px black;
        }

    }
  }
`;
