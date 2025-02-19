'use client';
import { useServerActions } from '@/app/contexts/server-actions';
import { Category } from '@/app/types/types';
import { PageSection, SectionTitle } from '../components/shared/Section';
import { Button } from '../components/shared/Button';
import CategoriesTable from '../components/categoriesTable/categoriesTable.component';
import { useState, useCallback, useEffect } from 'react';
import CategoryFormPopup from '../components/categoryFormPopup/categoryFormOpup.component';

type FormState = {
  isOpen: boolean;
  isEditing: boolean;
  currentCategory: Category | null;
};

export default function CategoriesPage() {
  const { createCategory, editCategory, getCategories, deleteCategory } =
    useServerActions();

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formState, setFormState] = useState<FormState>({
    isOpen: false,
    isEditing: false,
    currentCategory: null,
  });

  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getCategories();
      setCategories(data);
    } finally {
      setIsLoading(false);
    }
  }, [getCategories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleOpenCreate = () => {
    setFormState({
      isOpen: true,
      isEditing: false,
      currentCategory: null,
    });
  };

  const handleOpenEdit = (category: Category) => {
    setFormState({
      isOpen: true,
      isEditing: true,
      currentCategory: category,
    });
  };

  const handleClosePopup = () => {
    setFormState(prev => ({
      ...prev,
      isOpen: false,
      currentCategory: null,
    }));
  };

  const handleSubmitSuccess = async () => {
    await fetchCategories();
    handleClosePopup();
  };

  const handleDeleteCategory = async (id: string) => {
    await deleteCategory(id);
    await fetchCategories();
  };

  return (
    <PageSection>
      <SectionTitle>Categories</SectionTitle>

      <CategoriesTable
        categories={categories}
        isLoading={isLoading}
        onEdit={handleOpenEdit}
        onDelete={handleDeleteCategory}
      />

      <Button className='cornered' onClick={handleOpenCreate}>
        Add
      </Button>

      <CategoryFormPopup
        isOpen={formState.isOpen}
        isEditing={formState.isEditing}
        category={formState.currentCategory}
        onCloseAction={handleClosePopup}
        onSubmitSuccessAction={handleSubmitSuccess}
        createCategoryAction={createCategory}
        editCategoryAction={editCategory}
      />
    </PageSection>
  );
}