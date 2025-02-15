// app/stories/page.tsx
'use client';

import { useServerActions } from '@/app/contexts/server-actions';
import { Category, Story } from '@/app/types/types';
import { useState, FormEvent, useEffect } from 'react';
import { PageSection, SectionTitle } from '../components/shared/Section';
import Popup from '../components/popup/popup.component';
import {
  FormInput,
  FormLabel,
  FormTextArea,
  FormSelect,
} from '../components/shared/Form';
import { CreateStoryButton } from '../components/categoriesSearch/categoriesSearch.styles';
import { Button } from '../components/shared/Button';
import FileInputContainer from '@/app/admin/components/fileInput/fileInput.component';
import CategoriesSearch from '../components/categoriesSearch/categoriesSearch.component';
import { CloseButton } from '../components/shared/Button';
import StoriesList from '../components/storiesList/storiesList.component';
import type { Story as StoryType } from '@/app/types/types';

export default function StoriesForm() {
  const [submitting, setSubmitting] = useState(false);
  const { createStory, getStories, deleteStory, editStory } = useServerActions();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stories, setStories] = useState<StoryType[]>([]);
  const [additionalFiles, setAdditionalFiles] = useState<string[]>([]);
  const [popupState, setPopupState] = useState({
    showPopup: false,
    edit: false,
    story: null as Story | null,
  });

  const fetchStories = async () => {
    setIsLoading(true);
    const stories = await getStories();
    setStories(stories);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchStories();
  }, []);

  const handleAddFile = () => {
    const newId = (additionalFiles.length + 1).toString();
    setAdditionalFiles(prev => [...prev, newId]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    selectedCategories.forEach(category => {
      formData.append('categories', category.id);
    });

    try {
      if (popupState.edit && popupState.story) {
        await editStory(popupState.story.id, formData);
      } else {
        await createStory(formData);
      }
      alert('Story created successfully!');
    } catch (error) {
      console.error(error);
      alert('There was an error creating the story.');
    } finally {
      setSubmitting(false);
      setPopupState({ ...popupState, showPopup: false });
      await fetchStories();
    }
  };

  return (
    <PageSection>
      <SectionTitle>Stories</SectionTitle>
      <StoriesList
        isLoading={isLoading}
        stories={stories}
        setPopupState={setPopupState}
        onDelete={async id => {
          await deleteStory(id);
          await fetchStories();
        }}
      />
      {popupState.showPopup && (
        <Popup>
          <CloseButton
            onClick={() => setPopupState({ ...popupState, showPopup: false })}
          />
          <SectionTitle>Create a Story</SectionTitle>
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor='title'>Title</FormLabel>
            <FormInput type='text' id='title' name='title' required />
            <FormLabel htmlFor='content'>Content</FormLabel>
            <FormTextArea id='content' name='content' required></FormTextArea>
            <FormLabel htmlFor='borough'>Borough</FormLabel>
            <FormSelect id='borough' name='borough' required>
              <option value='brooklyn'>Brooklyn</option>
              <option value='manhattan'>Manhattan</option>
              <option value='bronx'>Bronx</option>
              <option value='queens'>Queens</option>
              <option value='staten island'>Staten Island</option>
            </FormSelect>
            <FormLabel htmlFor='categories'>Categories</FormLabel>

            <CategoriesSearch
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />

            <FileInputContainer id='thumbnail' />
            {additionalFiles.map(index => (
              <FileInputContainer key={index} id={index.toString()} />
            ))}
            <Button
              type='button'
              className='inverted block'
              onClick={handleAddFile}
            >
              Add images
            </Button>
            <CreateStoryButton type='submit' disabled={submitting}>
              {submitting ? 'Submitting...' : 'Create Story'}
            </CreateStoryButton>
          </form>
        </Popup>
      )}
      <Button
        className='cornered'
        onClick={() => setPopupState({ ...popupState, showPopup: true })}
      >
        Add
      </Button>
    </PageSection>
  );
}
