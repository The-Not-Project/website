// components/shared/Table.tsx
'use client';

import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  tbody tr {
    &:nth-child(odd) {
      background-color: hsl(36, 47%, 97%);
    }
  }

  th, td {
    padding: 10px;
    text-align: left;
    font-size: 1.1rem;
    &.justify-right {
        display: flex;
        justify-content: right;
    }
  }

  th {
    border-bottom: 1px solid #ddd;
    font-weight: 500;
  }
`;