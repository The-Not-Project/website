'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import { Filters, Story } from '@/app/types/types';
import StoriesList from '../storiesList/storiesList.component';
import StoriesSearch from '../storiesSearch/storiesSearch.component';
import { StoriesContainer } from './storiesPage.styles';
import LoadingPage from '@/app/(public)/components/loadingPage/loadingPage.component';
import Header from '../header/header.component';
import { BoroughSummaries } from '@/app/constants/boroughs';

interface StoriesPageProps {
  boroughParam?: string;
}

export default function StoriesPageComponent({ boroughParam }: StoriesPageProps) {
  const currentBorough = boroughParam
    ? BoroughSummaries[boroughParam.toLowerCase() as keyof typeof BoroughSummaries]
    : BoroughSummaries.nyc;

  const defaultFilters: Filters = {
    search: '',
    boroughs: boroughParam ? [boroughParam.toLowerCase()] : [],
    categories: [],
  };
  

  const { getStories } = usePublicServerActions();
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]);
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [showLoader, setShowLoader] = useState(true);

  const fetchStories = useCallback(
    async (appliedFilters: Filters = defaultFilters) => {
      const finalFilters = boroughParam 
        ? { ...appliedFilters, boroughs: [boroughParam.toLowerCase()] }
        : appliedFilters;

      const data = await getStories(finalFilters, 500);
      setStories(data);
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowLoader(false), 300);
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
      {/* {boroughParam && (
        <BoroughTitle>Our {currentBorough.boroughName} Stories</BoroughTitle>
      )} */}
      <StoriesContainer>
        <StoriesSearch 
          filters={filters} 
          setFilters={setFilters}
        />
        <StoriesList stories={stories} />
      </StoriesContainer>
    </>
  );
}