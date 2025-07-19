import styled from 'styled-components';

export const CategoriesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  tbody tr {
    &:nth-child(odd) {
      background-color: hsl(0, 0%, 100%);
    }
  }

  th {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 500;

    &:nth-child(3) {
      display: flex;
      justify-content: right;
    }
  }
  td {
    padding: 10px;
    font-size: 1.1rem;
    &:nth-child(3) {
      display: flex;
      justify-content: right;
    }
  }
`;
