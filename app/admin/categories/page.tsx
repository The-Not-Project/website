'use client';
import { useServerActions } from '@/app/contexts/server-actions';
import { Category } from '@/app/types/types';
import { PageSection, SectionTitle } from '../components/shared/Section';
import { Button, ButtonsContainer } from '../components/shared/Button';
import Popup from '../components/popup/popup.component';
import { FormLabel, FormInput } from '../components/shared/Form';
import CategoriesTable from '../components/categoriesTable/categoriesTable.component';
import { useState, useCallback, useEffect } from 'react';

export default function Categories() {
  const { createCategory, editCategory, getCategories, deleteCategory } =
    useServerActions();

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [popupState, setPopupState] = useState({
    showPopup: false,
    edit: false,
    category: null as Category | null,
  });

  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    } finally {
      setIsLoading(false);
    }
  }, [getCategories]);


  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleCreateOrEdit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    try {
      if (popupState.edit && popupState.category) {
        await editCategory(popupState.category.id, data);
      } else {
        await createCategory(data);
      }
      await fetchCategories(); 
      setPopupState({
        ...popupState,
        showPopup: false,
        edit: false,
        category: null,
      });
    } catch (error) {
      console.error('Failed to update categories:', error);
    }
  };

  return (
    <PageSection>
      <SectionTitle>Categories</SectionTitle>

      <CategoriesTable
        categories={categories}
        isLoading={isLoading}
        setPopupState={setPopupState}
        onDelete={async id => {
          await deleteCategory(id);
          await fetchCategories();
        }}
      />
      <Button
        className='cornered'
        onClick={() =>
          setPopupState({ showPopup: true, edit: false, category: null })
        }
      >
        Add
      </Button>
      {popupState.showPopup && (
        <Popup>
          <SectionTitle>
            {popupState.edit ? 'Edit Category' : 'Create New Category'}
          </SectionTitle>
          <form onSubmit={handleCreateOrEdit}>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <FormInput
              type='text'
              id='name'
              name='name'
              defaultValue={popupState.category?.name || ''}
              required
            />
            <FormLabel htmlFor='description'>Description</FormLabel>
            <FormInput
              type='text'
              name='description'
              defaultValue={popupState.category?.description || ''}
              required
            />
            <br />
            <ButtonsContainer>
              <Button type='submit'>
                {popupState.edit ? 'Save' : 'Create'}
              </Button>
              <Button
                type='button'
                className='inverted'
                onClick={() =>
                  setPopupState({ ...popupState, showPopup: false })
                }
              >
                Cancel
              </Button>
            </ButtonsContainer>
          </form>
        </Popup>
      )}
    </PageSection>
  );
}
