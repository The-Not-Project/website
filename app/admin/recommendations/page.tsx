// app/recommendations/page.tsx
'use client';
import { PageSection, SectionTitle } from '../components/shared/Section';
import { useServerActions } from '@/app/contexts/server-actions';
import { Filters, Story } from '@/app/types/types';
import { useState, useEffect, useCallback } from 'react';
import RecommendationsList from '../components/recommendationsList/recommendationsList.component';
import RecommendationSearch from '../components/recommendationSearch/recommendationSearch.component';

const defaultFilters = {
  search: '',
  boroughs: [],
  categories: [],
};

export default function RecommendationsPage() {
  const {
    getRecommendations,
    addRecommendation,
    getFilteredStories,
    removeRecommendation,
  } = useServerActions();

  const [recommendations, setRecommendations] = useState<Story[]>([]);
  const [searchResults, setSearchResults] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const fetchRecommendations = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getRecommendations();
      setRecommendations(data);
    } finally {
      setIsLoading(false);
    }
  }, [getRecommendations]);

  const handleSearch = useCallback(
    async (searchValue: string) => {
      if (!searchValue.trim()) {
        setSearchResults([]);
        return;
      }
      const data = await getFilteredStories({
        ...filters,
        search: searchValue,
      });
      const recommendedIds = new Set(recommendations.map(rec => rec.id));
      setSearchResults(data.filter(story => !recommendedIds.has(story.id)));
    },
    [filters, getFilteredStories, recommendations]
  );

  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  const handleAddRecommendation = useCallback(
    async (id: string) => {
      await addRecommendation(id);
      setFilters(defaultFilters);
      await fetchRecommendations();
    },
    [addRecommendation, fetchRecommendations]
  );

  const handleRemoveRecommendation = useCallback(
    async (id: string) => {
      await removeRecommendation(id);
      setFilters(defaultFilters);
      await fetchRecommendations();
    },
    [removeRecommendation, fetchRecommendations]
  );

  return (
    <PageSection>
      <SectionTitle>Recommended stories</SectionTitle>
      <RecommendationsList
        recommendations={recommendations}
        onRemoveAction={handleRemoveRecommendation}
        isLoading={isLoading}
        />

        <SectionTitle>Add new</SectionTitle>
      <RecommendationSearch
        searchValue={filters.search}
        results={searchResults}
        isLoading={isLoading}
        onSearchChangeAction={value => {
          setFilters(prev => ({ ...prev, search: value }));
          handleSearch(value);
        }}
        onAddAction={handleAddRecommendation}
      />
    </PageSection>
  );
}
