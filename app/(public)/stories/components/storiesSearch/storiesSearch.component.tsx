import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/contexts/public-app-actions';
import { Category, Filters } from '@/app/types/types';
import {
  StoriesSearchContainer,
  SearchInput,
  SearchTitle,
  SecondaryTitle,
  FilterOptionsContainer,
  ApplyFiltersButton,
  SearchContainer,
  ArrowIcon,
  FilterCheckbox,
  FilterLabel,
} from './storiesSearch.styles';
import { FaMagnifyingGlass as SearchIcon } from 'react-icons/fa6';

type StoriesSearchProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export default function StoriesSearch({
  filters,
  setFilters,
}: StoriesSearchProps) {
  const { getCategories } = useAppContext();
  const [categories, setCategories] = useState<Category[]>([]);
  const [localFilters, setLocalFilters] = useState<Filters>(filters);
  const [categoriesVisible, setCategoriesVisible] = useState(false);

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

  function handleCategoryClick(category: Category) {
    const newCategories = localFilters.categories.includes(category.id)
      ? localFilters.categories.filter(c => c !== category.id)
      : [...localFilters.categories, category.id];
    setLocalFilters({ ...localFilters, categories: newCategories });
  }

  return (
    <StoriesSearchContainer>
      <SearchTitle>Filter Stories</SearchTitle>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          id='search'
          placeholder='Search...'
          value={localFilters.search}
          onChange={handleSearchChange}
        />
      </SearchContainer>
      <hr />
      <SecondaryTitle onClick={() => setCategoriesVisible(!categoriesVisible)}>
        <ArrowIcon className={categoriesVisible ? 'rotated' : undefined} />
        Categories
      </SecondaryTitle>
      <FilterOptionsContainer className={categoriesVisible ? 'visible' : ''}>
        {categories.map(category => (
          <div key={category.id} className='checkbox-wrapper-47'>
            <FilterCheckbox
              type='checkbox'
              name='cb'
              id={`category-${category.id}`}
              checked={localFilters.categories.includes(category.id)}
              onChange={() => handleCategoryClick(category)}
            />
            <FilterLabel htmlFor={`category-${category.id}`}>
              {category.name}
            </FilterLabel>
          </div>
        ))}
      </FilterOptionsContainer>
      {/* <SecondaryTitle>Boroughs</SecondaryTitle>
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
      </FilterOptionsContainer> */}
      <ApplyFiltersButton onClick={() => setFilters(localFilters)}>
        Look Up
      </ApplyFiltersButton>
    </StoriesSearchContainer>
  );
}
