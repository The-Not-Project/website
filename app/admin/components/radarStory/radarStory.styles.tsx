import styled from 'styled-components';



export const RadarCardContainer = styled.section`
  display: flex;
  margin: 40px;
  height: 450px;
  overflow: hidden;
`;

export const RadarDescription = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  width: 50%;
  position: relative;
  transition: 0.3s ease-out;
  background: #fff;

  .title {
  }

  .summary {
    font-style: italic;
  }

  .author {
    position: absolute;
    bottom: 30px;    
  }

`;

export const RadarPhoto = styled.div<{ $url: string }>`
  flex-grow: 1;
  background: url(${({ $url }) => $url}) no-repeat center center/cover;
`;
export const DeleteButton = styled.p`
    cursor: pointer;
`