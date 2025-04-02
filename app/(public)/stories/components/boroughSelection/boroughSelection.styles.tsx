import styled from 'styled-components';

export const BoroughSelectionContainer = styled.nav`
  backdrop-filter: blur(5px);
  /* -webkit-backdrop-filter: blur(5px);  */
  margin-inline: auto;
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
    font-size: clamp(1rem, 2vw, 1.5rem);
    gap: 25px;

    li {
        color: lightgray;
        transition:  .2s;

        &.active, &:hover {
          color: white;
            filter: none;
            text-shadow: 0 0 20px white;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

    }
  }
`;
