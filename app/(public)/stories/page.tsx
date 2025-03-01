'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import { Filters, Story } from '@/app/types/types';
import StoriesList from './components/storiesList/storiesList.component';
import StoriesSearch from './components/storiesSearch/storiesSearch.component';
import { StoriesContainer } from './style';

const defaultFilters = {
  search: '',
  boroughs: [],
  categories: [],
};

export default function StoriesPage() {
  const { getStories } = usePublicServerActions();
  const [stories, setStories] = useState<Story[]>([]);
  const [filters, SetFilters] = useState<Filters>(defaultFilters);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStories = useCallback(
    async (appliedFilters: Filters = defaultFilters) => {
      setIsLoading(true);
      try {
        const data = await getStories(appliedFilters, 500);
        setStories(data);
      } finally {
        setIsLoading(false);
      }
    },
    [getStories]
  );

  useEffect(() => {
    fetchStories(filters);
  }, [filters]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <StoriesContainer>
        <StoriesSearch filters={filters} setFilters={SetFilters} />
        <StoriesList stories={stories} />
      </StoriesContainer>
    </>
  );
}
