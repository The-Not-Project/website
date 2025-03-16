'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import { Filters, Story } from '@/app/types/types';
import StoriesList from './components/storiesList/storiesList.component';
import StoriesSearch from './components/storiesSearch/storiesSearch.component';
import { StoriesContainer } from './style';
import LoadingPage from '../../components/loadingPage/loadingPage.component';
import Header from './components/header/header.component';
import { useParams } from 'next/navigation';

export default function StoriesPage() {
  const { borough: currentBorough } = useParams() as { borough: string };

  const defaultFilters = {
    search: '',
    boroughs: [currentBorough.toLowerCase()],
    categories: [],
  };

  const { getStories } = usePublicServerActions();
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]);
  const [filters, SetFilters] = useState<Filters>(defaultFilters);
  const [showLoader, setShowLoader] = useState(true);

  const fetchStories = useCallback(
    async (appliedFilters: Filters = defaultFilters) => {
      const data = await getStories(
        {
          ...appliedFilters,
          boroughs: [currentBorough.toLowerCase()],
        },
        500
      );
      setStories(data);
      setLoading(false);
    },
    [getStories]
  );

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    fetchStories(filters);
  }, [filters]);

  return (
    <>
      <Header borough={currentBorough} />
      {showLoader && <LoadingPage isLoading={loading} isHome={false} />}
      <StoriesContainer>
        <StoriesSearch filters={filters} setFilters={SetFilters} />
        <StoriesList stories={stories} />
      </StoriesContainer>
    </>
  );
}
