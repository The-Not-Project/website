// components/categories/categories.component.tsx
'use client';
import { useServerActions } from '@/app/contexts/server-actions';
import { useEffect, useState } from 'react';
import { Category } from '@/app/types/types';
import { PageSection, SectionTitle } from '../components/shared/Section';
import { Table } from '../components/shared/Table';
import { Button, ButtonsContainer } from '../components/shared/Button';
import Popup from '../components/popup/popup.component';
import { FormLabel, FormInput } from '../components/shared/Form';
import LoadingPage from '../components/loadingPage/loadingPage.component';

export default function Categories() {
  const { getCategories, createCategory, deleteCategory, editCategory } =
    useServerActions();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [popupState, setPopupState] = useState({
    showPopup: false,
    edit: false,
    category: null as Category | null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCreateOrEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    try {
      if (popupState.edit && popupState.category) {
        await editCategory(popupState.category.id, data);
      } else {
        await createCategory(data);
      }
      const updatedCategories = await getCategories();
      setCategories(updatedCategories);
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

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteCategory(id);
        const updatedCategories = await getCategories();
        setCategories(updatedCategories);
      } catch (error) {
        console.error('Failed to delete category:', error);
      }
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <PageSection>
      <SectionTitle>Categories</SectionTitle>
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td className='justify-right'>
                <ButtonsContainer>
                  <Button
                    onClick={() =>
                      setPopupState({ showPopup: true, edit: true, category })
                    }
                  >
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(category.id)}>
                    Delete
                  </Button>
                </ButtonsContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

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
