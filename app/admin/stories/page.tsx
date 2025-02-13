// app/stories/page.tsx
'use client';

import { useServerActions } from '@/app/contexts/server-actions';
import { Category } from '@/app/types/types';
import { useState, FormEvent } from 'react';
import { PageSection, SectionTitle } from '../components/shared/Section';
import {
  FormInput,
  FormLabel,
  FormTextArea,
  FormSelect,
} from '../components/shared/Form';
import {
  CreateStoryButton,

} from '../components/categoriesSearch/categoriesSearch.styles';
import { Button } from '../components/shared/Button';
import FileInputContainer from '@/app/admin/components/fileInput/fileInput.component';
import CategoriesSearch from '../components/categoriesSearch/categoriesSearch.component';

export default function StoriesForm() {
  const [submitting, setSubmitting] = useState(false);
  const { createStory } = useServerActions();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);




  const [additionalFiles, setAdditionalFiles] = useState<string[]>([]);

  const handleAddFile = () => {
    const newId = (additionalFiles.length + 1).toString();
    setAdditionalFiles(prev => [...prev, newId]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);
    selectedCategories.forEach(category => {
      formData.append('categories', category.id);
    });

    try {
      const newStory = await createStory(formData);
      console.log('Story created:', newStory);
    } catch (error) {
      console.error(error);
      alert('There was an error creating the story.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageSection>
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
        {additionalFiles.map((index) => (
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
    </PageSection>
  );
}
