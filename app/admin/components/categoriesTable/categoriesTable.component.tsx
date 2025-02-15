import { useEffect, useState } from 'react';
import { Button, ButtonsContainer } from '../shared/Button';
import { Table } from '../shared/Table';
import { Category } from '@/app/types/types';
import LoadingPage from '../loadingPage/loadingPage.component';

type CategoriesTableProps = {
  categories: Category[];
  isLoading: boolean;
  setPopupState: (popupState: {
    showPopup: boolean;
    edit: boolean;
    category: Category;
  }) => void;
  onDelete: (id: string) => Promise<void>;
};

export default function CategoriesTable({
  categories,
  isLoading,
  setPopupState,
  onDelete,
}: CategoriesTableProps) {
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure?')) {
      try {
        await onDelete(id);
      } catch (error) {
        console.error('Failed to delete category:', error);
      }
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
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
  );
}
