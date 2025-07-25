import { Button, ButtonsContainer } from '../../../shared/components/button/button';
import { Table } from '../../../shared/components/layout/Table';
import { Category } from '@/app/types/types';
import LoadingPage from '../../../shared/components/loadingPage/loadingPage.component';

type CategoriesTableProps = {
  categories: Category[];
  isLoading: boolean;
  onEdit: (category: Category) => void;
  onDelete: (id: string) => Promise<void>;
};

export default function CategoriesTable({
  categories,
  isLoading,
  onEdit,
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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(category => (
          <tr key={category.id}>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td className='justify-right'>
              <ButtonsContainer>
                <Button onClick={() => onEdit(category)}>Edit</Button>
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
