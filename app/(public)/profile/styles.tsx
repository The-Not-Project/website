import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const PageSection = styled.section`
  display: flex;
`;

export const PageSectionTitle = styled.h1`
margin-bottom: 40px;`;

export const SectionDescription = styled.div`
  width: 40%;

  h2 {
    font-weight: normal;
  }

  p {
    color: #4b4b4b;
  }
`;
