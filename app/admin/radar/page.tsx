'use client';
import { useServerActions } from '@/app/contexts/server-actions';
import { PageSection, SectionTitle } from '../components/shared/Section';
import StoriesSearch from '../components/storiesSearch/storiesSearch.component';
import { useCallback, useEffect, useState } from 'react';
import { Story } from '@prisma/client';
import { Filters } from '@/app/types/types';
import RadarStory from '../components/radarStory/radarStory.component';

const defaultFilters = {
  search: '',
  boroughs: [],
  categories: [],
};

export default function Page() {
  const { getRadarStory, deleteRadarStory, updateRadarStory, getStories } =
    useServerActions();
  const [searchResults, setSearchResults] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchIsLoading, setsearchIsLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [radarStory, setRadarStory] = useState<Story>();

  const fetchRadarStory = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getRadarStory();

      setRadarStory(data[0]);
    } finally {
      setIsLoading(false);
    }
  }, [getRadarStory]);

  useEffect(() => {
    fetchRadarStory();
  }, [fetchRadarStory]);

  const handleSearch = useCallback(
    async (searchValue: string) => {
      if (!searchValue.trim()) {
        setSearchResults([]);
        return;
      }
      setsearchIsLoading(true);

      const data = await getStories({
        ...filters,
        search: searchValue,
      });

      const radarId = radarStory?.id;

      setSearchResults(data.filter(story => story.id !== radarId));
      setsearchIsLoading(false);
    },
    [filters, radarStory]
  );

  const handleSetRadarStory = useCallback(
    async (id: string) => {
      await updateRadarStory(id);
      setFilters(defaultFilters);
      await fetchRadarStory();
    },
    [updateRadarStory, fetchRadarStory]
  );

  const handleDeleteRadarStory = useCallback(async () => {
    await deleteRadarStory();
    await fetchRadarStory();
    }, [deleteRadarStory, fetchRadarStory]);

  return (
    <PageSection>
      <SectionTitle>Radar Story</SectionTitle>
      {radarStory ? (
        <>
        <RadarStory story={radarStory} isLoading={isLoading} onDeleteAction={handleDeleteRadarStory} />
        </>
      ) : (
        <StoriesSearch
          searchValue={filters.search}
          results={searchResults}
          isLoading={searchIsLoading}
          onSearchChangeAction={value => {
            setFilters(prev => ({ ...prev, search: value }));
            handleSearch(value);
          }}
          onAddAction={handleSetRadarStory}
        />
      )}
    </PageSection>
  );
}
