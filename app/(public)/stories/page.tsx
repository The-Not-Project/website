'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAppContext } from '@/app/contexts/public-app-actions';
import { Filters, Story } from '@/app/types/types';
import StoriesList from './components/storiesList/storiesList.component';
import StoriesSearch from './components/storiesSearch/storiesSearch.component';
import { StoriesContainer } from './style';
import LoadingPage from '../components/loadingPage/loadingPage.component';
import Header from './components/header/header.component';

const defaultFilters = {
  search: '',
  boroughs: [],
  categories: [],
};

export default function StoriesPage() {
  const { getStories, currentBorough, loading, setLoading } = useAppContext();
  const [stories, setStories] = useState<Story[]>([]);
  const [filters, SetFilters] = useState<Filters>(defaultFilters);
  const [showLoader, setShowLoader] = useState(true);

  const fetchStories = useCallback(
    async (
      appliedFilters: Filters = {
        ...defaultFilters,
        boroughs: [currentBorough.fileName.toLowerCase()],
      }
    ) => {
      setShowLoader(true); // Reset showLoader to true for new fetches
      setLoading(true);
      try {
        const data = await getStories(
          {
            ...appliedFilters,
            boroughs: [currentBorough.fileName.toLowerCase()],
          },
          500
        );
        setStories(data);
      } finally {
        setLoading(false);
      }
    },
    [getStories, currentBorough]
  );

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [loading, currentBorough]);

  useEffect(() => {
    fetchStories(filters);
  }, [filters, currentBorough]);

  return (
    <>
      <Header />
      {showLoader && <LoadingPage isLoading={loading} isHome={false} />}
      <StoriesContainer>
        <StoriesSearch filters={filters} setFilters={SetFilters} />
        <StoriesList stories={stories} />
      </StoriesContainer>
    </>
  );
}
