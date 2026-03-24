"use client";

import { useRouter, usePathname } from "next/navigation";
import { Category, Filters } from "@/app/types/types";
import {
  ApplyFiltersButton,
  FilterCheckbox,
  FilterLabel,
  FilterOptionsContainer,
  Hashtag,
  SearchContainer,
  SearchInput,
  SearchTitle,
  SecondaryTitle,
  StoriesSearchContainer,
} from "./storiesSearch.styles";
import {
  LuListFilter as FilterIcon,
  LuSearch as SearchIcon,
} from "react-icons/lu";

interface StoriesSearchProps {
  initialFilters: Filters;
  availableCategories: Category[];
}

export default function StoriesSearch({
  initialFilters,
  availableCategories,
}: StoriesSearchProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleAction = (formData: FormData) => {
    const params = new URLSearchParams();

    const search = formData.get("q") as string;
    const cats = formData.getAll("cat") as string[];

    if (search) params.set("q", search);
    cats.forEach((id) => params.append("cat", id));

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <form action={handleAction}>
      <SearchTitle>
        <FilterIcon />
        Filter Stories
      </SearchTitle>
      <StoriesSearchContainer>
        <SearchContainer>
          <SearchIcon color="#949494" />
          <SearchInput
          type="text"
            id="search"
            name="q"
            placeholder="Search stories"
            defaultValue={initialFilters.search}
          />
        </SearchContainer>
        <hr />
        <div>
          <SecondaryTitle>Categories</SecondaryTitle>
          <FilterOptionsContainer className="visible">
            {availableCategories.map((category) => (
              <div key={category.id} className="checkbox-wrapper-47">
                <FilterCheckbox
                  type="checkbox"
                  name="cat"
                  id={`category-${category.id}`}
                  value={category.id}
                  defaultChecked={initialFilters.categories.includes(
                    category.id,
                  )}
                />
                <FilterLabel htmlFor={`category-${category.id}`}>
                  <Hashtag size={13} /> 
                  {category.name}
                </FilterLabel>
              </div>
            ))}
          </FilterOptionsContainer>
        </div>
        <ApplyFiltersButton type="submit">
          <span>Look Up</span> <SearchIcon size={18} />
        </ApplyFiltersButton>
      </StoriesSearchContainer>
    </form>
  );
}
