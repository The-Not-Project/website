'use client';

import { useServerActions } from '@/app/contexts/server-actions';
import { Category, Filters, Story } from '@/app/types/types';
import { useState, useEffect, useCallback } from 'react';
import {
  PageSection,
  SectionTitle,
  StoriesSection,
} from '../components/shared/Section';
import StoriesList from '../components/storiesList/storiesList.component';
import StoryFormPopup from '../components/storyFormPopup/storyFormPopup.component';
import StoriesSearch from '../components/storiesSearch/storiesSearch.component';
import { Button } from '../components/shared/Button';

type FormState = {
  isOpen: boolean;
  isEditing: boolean;
  currentStory: Story | null;
  selectedCategories: Category[];
}

const defaultFilters = {
  search: '',
  boroughs: [],
  categories: [],
}

export default function StoriesPage() {
  const { createStory, getStories, deleteStory, editStory, getFilteredStories } =
    useServerActions();
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formState, setFormState] = useState<FormState>({
    isOpen: false,
    isEditing: false,
    currentStory: null,
    selectedCategories: [],
  });
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const fetchStories = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getStories();
      setStories(data);
    } finally {
      setIsLoading(false);
    }
  }, [getStories]);

  const fetchFilteredStories = useCallback(async (filters: Filters) => {
    setIsLoading(true);
    try {
      const data = await getFilteredStories(filters);
      setStories(data);
    } finally {
      setIsLoading(false);
    }
  }, [getStories]);

  useEffect(() => {
    if (filters.search || filters.boroughs.length > 0 || filters.categories.length > 0) {
      fetchFilteredStories(filters);
    } else {
      fetchStories();
    }
  }, [filters]);

  const handleOpenCreate = () => {
    setFormState({
      isOpen: true,
      isEditing: false,
      currentStory: null,
      selectedCategories: [],
    });
  };

  const handleOpenEdit = (story: Story) => {
    setFormState({
      isOpen: true,
      isEditing: true,
      currentStory: story,
      selectedCategories: story.categories,
    });
  };

  const handleClosePopup = () => {
    setFormState(prev => ({
      ...prev,
      isOpen: false,
      currentStory: null,
      selectedCategories: [],
    }));
  };

  const handleSubmitSuccess = async () => {
    await fetchStories();
    handleClosePopup();
  };

  const handleDeleteStory = async (id: string) => {
    await deleteStory(id);
    await fetchStories();
  };

  return (
    <PageSection>
      <SectionTitle>Stories</SectionTitle>
      <StoriesSection>
        <StoriesSearch filters={filters} setFilters={setFilters}/>
        <div>
          <StoriesList
            isLoading={isLoading}
            stories={stories}
            onEdit={handleOpenEdit}
            onDelete={handleDeleteStory}
          />

          <StoryFormPopup
            isOpen={formState.isOpen}
            isEditing={formState.isEditing}
            story={formState.currentStory}
            selectedCategories={formState.selectedCategories}
            onClose={handleClosePopup}
            onSubmitSuccess={handleSubmitSuccess}
            onCategoriesChange={(categories: Category[]) =>
              setFormState(prev => ({
                ...prev,
                selectedCategories: categories,
              }))
            }
            createStory={createStory}
            editStory={editStory}
          />

          <Button className='cornered' onClick={handleOpenCreate}>
            Add
          </Button>
        </div>
      </StoriesSection>
    </PageSection>
  );
}
