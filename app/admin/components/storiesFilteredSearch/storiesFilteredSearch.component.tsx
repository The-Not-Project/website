import { useAdminServerActions } from '@/app/contexts/admin-server-actions';
import { Category, Filters } from '@/app/types/types';
import {
  StoriesSearchContainer,
  SearchInput,
  SearchTitle,
  SecondaryTitle,
  FilterOptionsContainer,
  FilterOption,
  ApplyFiltersButton,
} from './storiesFilteredSearch.styles';
import { useEffect, useState } from 'react';

type StoriesSearchProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export default function StoriesSearch({
  filters,
  setFilters,
}: StoriesSearchProps) {
  const { getCategories } = useAdminServerActions();
  const [categories, setCategories] = useState<Category[]>([]);
  const [localFilters, setLocalFilters] = useState<Filters>(filters);

  const boroughs = [
    'brooklyn',
    'manhattan',
    'queens',
    'staten island',
    'bronx',
  ];

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const data = await getCategories();
    setCategories(data);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocalFilters({ ...localFilters, search: e.target.value });
  }

  function handleBoroughClick(borough: string) {
    const newBoroughs = localFilters.boroughs.includes(borough)
      ? localFilters.boroughs.filter(b => b !== borough)
      : [...localFilters.boroughs, borough];
    setLocalFilters({ ...localFilters, boroughs: newBoroughs });
  }

  function handleCategoryClick(category: Category) {
    const newCategories = localFilters.categories.includes(category.id)
      ? localFilters.categories.filter(c => c !== category.id)
      : [...localFilters.categories, category.id];
    setLocalFilters({ ...localFilters, categories: newCategories });
  }

  function capitalizeWords(str: string) {
    return str
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' ');
  }

  return (
    <StoriesSearchContainer>
      <SearchTitle>Title</SearchTitle>
      <SearchInput
        id='search'
        placeholder='e.g. My First Story'
        value={localFilters.search}
        onChange={handleSearchChange}
      />
      <SearchTitle>Filters</SearchTitle>
      <SecondaryTitle>Categories</SecondaryTitle>
      <FilterOptionsContainer>
        {categories.map(category => (
          <FilterOption
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className={
              localFilters.categories.includes(category.id) ? 'selected' : ''
            }
          >
            {category.name}
          </FilterOption>
        ))}
      </FilterOptionsContainer>
      <SecondaryTitle>Boroughs</SecondaryTitle>
      <FilterOptionsContainer>
        {boroughs.map(borough => (
          <FilterOption
            key={borough}
            onClick={() => handleBoroughClick(borough)}
            className={
              localFilters.boroughs.includes(borough) ? 'selected' : ''
            }
          >
            {capitalizeWords(borough)}
          </FilterOption>
        ))}
      </FilterOptionsContainer>
      <ApplyFiltersButton onClick={() => setFilters(localFilters)}>
        Apply Filters
      </ApplyFiltersButton>
    </StoriesSearchContainer>
  );
}
