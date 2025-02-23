import { ServerActionsProvider } from '@/app/contexts/server-actions';
import { getSession } from '@auth0/nextjs-auth0';
import { isUserAdmin } from '../actions/isUserAdmin';
import { redirect } from 'next/navigation';
import NavBar from './components/navbar/navbar.component';
import {
  UpdateUser,
  getCategories,
  createCategory,
  deleteCategory,
  editCategory,
  getUser,
  createStory,
  getStories,
  deleteStory,
  editStory,
  getRecommendations,
  addRecommendation,
  removeRecommendation,
  getRadarStory,
  updateRadarStory,
  deleteRadarStory
} from '../script';
import { AdminContainer } from './components/shared/layout.styles';
import Back from './components/backButton/backButton.component';

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
    <ServerActionsProvider {...groupedActions}>
      <AdminContainer>
        <Back />
        <div className='admin-content'>
          <h1>The Not Project - Admin Page</h1>
          <NavBar />
          {children}
        </div>
      </AdminContainer>
    </ServerActionsProvider>
  );
}
