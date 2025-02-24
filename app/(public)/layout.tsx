import { PublicServerActionsProvider } from '@/app/contexts/public-server-actions';
import NavBar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import { getSession } from '@auth0/nextjs-auth0';
import { isUserAdmin } from '../auth-actions/isUserAdmin';
import { getUser, UpdateUser } from '../database/user';
import { getCategories } from '../database/category';
import { getStories } from '../database/story';
import { getRecommendations } from '../database/recommendation';
import { getRadarStory } from '../database/radar';

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
      <NavBar isAdmin={isAdmin} />
      {children}
      <Footer />
    </PublicServerActionsProvider>
  );
}
