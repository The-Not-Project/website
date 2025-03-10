import { PublicServerActionsProvider } from '@/app/contexts/public-app-actions';
import NavBar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import { getSession } from '@auth0/nextjs-auth0';
import { isUserAdmin } from '../auth-actions/isUserAdmin';
import { getUser, UpdateUser } from '../database/repositories/user.repository';
import { getCategories } from '../database/repositories/category.repository';
import { getStories } from '../database/repositories/story.repository.';
import { getRecommendations } from '../database/repositories/recommendation.repository';
import { getRadarStory } from '../database/repositories/radar.repository';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let isAdmin: boolean = false;

  const session = await getSession();

  if (session) {
    isAdmin = await isUserAdmin();
  }

  const groupedActions = {
    getUser,
    getCategories,
    getStories,
    getRecommendations,
    getRadarStory,
    UpdateUser,
  };

  return (
    <PublicServerActionsProvider {...groupedActions}>
      <NavBar isAdmin={isAdmin} authenticated={!!session} />
      {children}
      <Footer />
    </PublicServerActionsProvider>
  );
}
