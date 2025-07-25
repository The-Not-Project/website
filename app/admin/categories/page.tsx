'use client';
import { useAdminServerActions } from '@/app/contexts/admin-server-actions';
import { Category } from '@/app/types/types';
import { PageSection, SectionTitle } from '../shared/components/layout/Section';
import { Button } from '../shared/components/button/button';
import CategoriesTable from './components/categoriesTable/categoriesTable.component';
import { useState, useCallback, useEffect } from 'react';
import CategoryFormPopup from './components/categoryFormPopup/categoryFormOpup.component';

type FormState = {
  isOpen: boolean;
  isEditing: boolean;
  currentCategory: Category | null;
};

export default function CategoriesPage() {
  const { createCategory, editCategory, getCategories, deleteCategory } =
    useAdminServerActions();

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
    window.scrollTo(0, 0);
    setFormState({
      isOpen: true,
      isEditing: false,
      currentCategory: null,
    });
  };

  const handleOpenEdit = (category: Category) => {
    window.scrollTo(0, 0);
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