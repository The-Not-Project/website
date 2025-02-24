import { AdminServerActionsProvider } from '@/app/contexts/admin-server-actions';
import { getSession } from '@auth0/nextjs-auth0';
import { isUserAdmin } from '../auth-actions/isUserAdmin';
import { redirect } from 'next/navigation';
import NavBar from './components/navbar/navbar.component';
import { AdminContainer } from './components/shared/layout.styles';
import Back from './components/backButton/backButton.component';
import { getUser, UpdateUser } from '../database/user';
import { createCategory, deleteCategory, editCategory, getCategories } from '../database/category';
import { createStory, deleteStory, editStory, getStories } from '../database/story';
import { addRecommendation, getRecommendations, removeRecommendation } from '../database/recommendation';
import { deleteRadarStory, getRadarStory, updateRadarStory } from '../database/radar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const isAdmin = await isUserAdmin();

  if (!isAdmin || !session?.user) {
    redirect('/');
  }

  const groupedActions = {
    getUser,
    UpdateUser,
    createCategory,
    getCategories,
    editCategory,
    deleteCategory,
    createStory,
    getStories,
    editStory,
    deleteStory,
    getRecommendations,
    addRecommendation,
    removeRecommendation,
    getRadarStory,
    updateRadarStory,
    deleteRadarStory
  };

  return (
    <AdminServerActionsProvider {...groupedActions}>
      <AdminContainer>
        <Back />
        <div className='admin-content'>
          <h1>The Not Project - Admin Page</h1>
          <NavBar />
          {children}
        </div>
      </AdminContainer>
    </AdminServerActionsProvider>
  );
}
