'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import { Filters, Story } from '@/app/types/types';
import StoriesList from './components/storiesList/storiesList.component';
import StoriesSearch from './components/storiesSearch/storiesSearch.component';
import { BoroughTitle, StoriesContainer } from './style';
import LoadingPage from '../../components/loadingPage/loadingPage.component';
import Header from './components/header/header.component';
import { BoroughSummaries } from '@/app/constants/boroughs';
import { useParams } from 'next/navigation';

export default function StoriesPage() {
  const { borough } = useParams() as { borough: string };
  const currentBorough =
    BoroughSummaries[borough as keyof typeof BoroughSummaries];

  const defaultFilters = {
    search: '',
    boroughs: [borough.toLowerCase()],
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
          boroughs: [borough.toLowerCase()],
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
      {showLoader && <LoadingPage isLoading={loading} isHome={false} />}
      <Header borough={currentBorough} />
      <BoroughTitle>Our {currentBorough.boroughName} Stories</BoroughTitle>
      <StoriesContainer>
        <StoriesSearch filters={filters} setFilters={SetFilters} />
        <StoriesList stories={stories} />
      </StoriesContainer>
    </>
  );
}
