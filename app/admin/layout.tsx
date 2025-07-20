import { AdminServerActionsProvider } from '@/app/contexts/admin-server-actions';
import NavBar from './components/navbar/navbar.component';
import { AdminContainer } from './components/shared/layout.styles';
import Back from './components/backButton/backButton.component';
import { getUser, UpdateUser } from '../database/repositories/user.repository';
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategories,
} from '../database/repositories/category.repository';
import {
  createEmptyStory,
  createStory,
  deleteStory,
  editStory,
  getStories,
} from '../database/repositories/story.repository';
import {
  addRecommendation,
  getRecommendations,
  removeRecommendation,
} from '../database/repositories/recommendation.repository';
import {
  deleteRadarStory,
  getRadarStory,
  updateRadarStory,
} from '../database/repositories/radar.repository';
import { getMediaSignedUrl } from '../database/helpers/media.helpers';
import { processMediaFile } from '../database/helpers/story.helpers';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const groupedActions = {
    getUser,
    UpdateUser,
    createCategory,
    getCategories,
    editCategory,
    deleteCategory,
    createStory,
    createEmptyStory,
    getStories,
    editStory,
    deleteStory,
    getRecommendations,
    addRecommendation,
    removeRecommendation,
    getRadarStory,
    updateRadarStory,
    deleteRadarStory,
    getMediaSignedUrl,
    processMediaFile
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
