import styled from 'styled-components';
import { FormInput } from '../shared/Form';
import { Button } from '../shared/Button';

export const CategoriesSearchContainer = styled.div`
  width: fit-content;
  margin-bottom: 20px;
`;

export const CategoriesInput = styled(FormInput)`
  margin-bottom: 0;

  &.expanded {
    border-bottom: none;
    /* border-radius: 5px 5px 0 0; */
  }

  &::placeholder {
    font-size: 0.9em;
  }
`;

export const CategoriesList = styled.ul`
  list-style: none;
  padding: 0.5rem;
  max-height: 150px;
  overflow-y: auto;
  background: hsl(0, 0%, 98%);
  border-bottom: 3px solid gray;
  border-radius: 0 0 5px 5px;
  width: 100%;
`;

export const SelectedCategory = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #e0e0e0;
  border-radius: 4px;

  svg {
    font-size: .8rem;
    translate: 0 1px;
    cursor: pointer;
  }
`;

export const CreateStoryButton = styled(Button)`
margin-top: 20px;
width: max-content;
padding-inline: 7px;
display: block;

`