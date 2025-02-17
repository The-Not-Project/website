// components/StoryFormPopup.tsx
'use client';

import { useState, FormEvent } from 'react';
import { Category, Story } from '@/app/types/types';
import Popup from '../popup/popup.component';
import {
  FormInput,
  FormLabel,
  FormTextArea,
  FormSelect,
} from '../shared/Form';
import { Button, CloseButton } from '../shared/Button';
import FileInputContainer from '@/app/admin/components/fileInput/fileInput.component';
import CategoriesSearch from '../categoriesSearch/categoriesSearch.component';
import { StoryImageContainer } from '../story/story.styles';
import { SectionTitle } from '../shared/Section';
import { CreateStoryButton } from '../categoriesSearch/categoriesSearch.styles';

interface StoryFormPopupProps {
  isOpen: boolean;
  isEditing: boolean;
  story: Story | null;
  selectedCategories: Category[];
  onClose: () => void;
  onSubmitSuccess: () => void;
  onCategoriesChange: (categories: Category[]) => void;
  createStory: (formData: FormData) => Promise<void>;
  editStory: (id: string, formData: FormData) => Promise<void>;
}

export default function StoryFormPopup({
  isOpen,
  isEditing,
  story,
  selectedCategories,
  onClose,
  onSubmitSuccess,
  onCategoriesChange,
  createStory,
  editStory,
}: StoryFormPopupProps) {
  const [submitting, setSubmitting] = useState(false);
  const [replaceMedia, setReplaceMedia] = useState(false);
  const [additionalFiles, setAdditionalFiles] = useState<string[]>([]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    selectedCategories.forEach(category => {
      formData.append('categories', category.id);
    });

    try {
      if (isEditing && story) {
        await editStory(story.id, formData);
      } else {
        await createStory(formData);
      }
      onSubmitSuccess();
    } catch (error) {
      console.error(error);
      alert(`There was an error ${isEditing ? 'updating' : 'creating'} the story.`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddFile = () => {
    setAdditionalFiles(prev => [...prev, Date.now().toString()]);
  };

  function capitalizeWords(str: string) {
    return str
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' ');
  }

  if (!isOpen) return null;

  return (
    <Popup>
      <CloseButton onClick={onClose} />
      <SectionTitle>{isEditing ? 'Edit Story' : 'Create New Story'}</SectionTitle>
      
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <FormInput
          name="title"
          required
          defaultValue={story?.title || ''}
        />

        <FormLabel htmlFor="content">Content</FormLabel>
        <FormTextArea
          name="content"
          required
          defaultValue={story?.content || ''}
        />

        <FormLabel htmlFor="borough">Borough</FormLabel>
        <FormSelect
          name="borough"
          required
          defaultValue={story?.borough || 'brooklyn'}
        >
          {['brooklyn', 'manhattan', 'bronx', 'queens', 'staten island'].map(borough => (
            <option key={borough} value={borough}>
              {capitalizeWords(borough)}
            </option>
          ))}
        </FormSelect>

        <FormLabel>Categories</FormLabel>
        <CategoriesSearch
          selectedCategories={selectedCategories}
          setSelectedCategories={onCategoriesChange}
        />

        {story && !replaceMedia ? (
          <>
            <FormLabel>Current Media</FormLabel>
            <StoryImageContainer
              src={story.media.find(m => m.isThumbnail)?.url || ''}
              width={150}
              height={100}
              alt="Story Image"
              quality={100} // 100 = lossless
            />
            <Button
              type="button"
              className="block inverted"
              onClick={() => setReplaceMedia(true)}
            >
              Replace Media
            </Button>
          </>
        ) : (
          <>
            <FileInputContainer id="thumbnail" />
            {additionalFiles.map(id => (
              <FileInputContainer key={id} id={id} />
            ))}
            <Button
              type="button"
              className="inverted block"
              onClick={handleAddFile}
            >
              Add More Images
            </Button>
          </>
        )}

        <CreateStoryButton type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : isEditing ? 'Save' : 'Create Story'}
        </CreateStoryButton>
      </form>
    </Popup>
  );
}