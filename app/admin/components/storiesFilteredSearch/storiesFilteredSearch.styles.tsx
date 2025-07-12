import styled from 'styled-components';

export const StoriesSearchContainer = styled.div`
  margin-bottom: 20px;
  width: 25%;
`;

export const SearchInput = styled.input`
  width: 200px;
  height: 35px;
  background: transparent;
  outline: none;
  border: 1px solid #bdbdbd;
  text-indent: 5px;
  font-size: 1.1rem;
  margin: 3px 20px 10px 0;
`;

export const SearchTitle = styled.h3`
  font-weight: 500;
  font-size: 1.3rem;
`;

export const SecondaryTitle = styled.h4`
  display: inline-block;
  font-weight: lighter;
`;

export const FilterOptionsContainer = styled.div`
  margin-block: 5px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const FilterOption = styled.span`
  color: #bebebe;
  border: 2px solid #bebebe;
  padding: 0 8px;
  font-size: 0.9rem;
  border-radius: 3px;
  cursor: pointer;

  &.selected {
    color: black;
    border-color: black;
  }
`;

export const ApplyFiltersButton = styled.button`
  margin-top: 10px;
  background: black;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
