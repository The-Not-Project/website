'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import { Filters, Story } from '@/app/types/types';
import StoriesList from './components/storiesList/storiesList.component';
import StoriesSearch from './components/storiesSearch/storiesSearch.component';
import { StoriesContainer } from './style';
import LoadingPage from '../components/loadingPage/loadingPage.component';

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
  const [showLoader, setShowLoader] = useState(true);


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
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    fetchStories(filters);
  }, [filters]);

  return (
    <>
      {showLoader && <LoadingPage isLoading={isLoading} isHome={false} />}
      <StoriesContainer>
        <StoriesSearch filters={filters} setFilters={SetFilters} />
        <StoriesList stories={stories} />
        <div className="highlights">
          <img src="/media/trump.jpg" alt="highlights" />
        </div>
      </StoriesContainer>
    </>
  );
}
