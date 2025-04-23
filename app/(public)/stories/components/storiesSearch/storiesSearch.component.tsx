import { useEffect, useState } from 'react';
import { usePublicServerActions } from '@/app/contexts/public-server-actions';
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
  FilterIcon,
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

  const { getCategories } = usePublicServerActions();
  const [categories, setCategories] = useState<Category[]>([]);
  const [localFilters, setLocalFilters] = useState<Filters>(filters);
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  useEffect(() => {
    setCategoriesVisible(window.innerWidth > 1600);
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
    <form
      onSubmit={e => {
        e.preventDefault();
        setFilters(localFilters);
        if (window.innerWidth < 1600) {
          setCategoriesVisible(false);
        }
      }}
    >
      <SearchTitle
        onClick={() => {
          if (window.innerWidth < 1600) {
            setCategoriesVisible(!categoriesVisible);
          }
        }}
      >
        <FilterIcon />
        Filter Stories
      </SearchTitle>
      <StoriesSearchContainer className={categoriesVisible ? 'visible' : ''}>
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
        <div>
          <SecondaryTitle
            onClick={() => {
              if (window.innerWidth > 1600) {
                setCategoriesVisible(!categoriesVisible);
              }
            }}
          >
            <ArrowIcon className={categoriesVisible ? 'rotated' : undefined} />
            Categories
          </SecondaryTitle>
          <FilterOptionsContainer
            className={categoriesVisible ? 'visible' : ''}
          >
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
        </div>
        <ApplyFiltersButton>Look Up</ApplyFiltersButton>
      </StoriesSearchContainer>
    </form>
  );
}
