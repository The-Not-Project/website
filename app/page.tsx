import './page.scss';
import RadarCard from '@/app/components/radarCard/radarCard.component';
import Header from '@/app/components/homepageHeader/homepageHeader.component';
import Footer from '@/app/components/footer/footer.component';
import Boroughs from '@/app/components/boroughsSection/boroughs.component';
import Recommendations from '@/app/components/recommendations/recommendations.component';
import NavBar from './components/navbar/navbar.component';
import { isUserAdmin } from './actions/isUserAdmin';
import { getSession } from '@auth0/nextjs-auth0';

export default async function Page() {

  let isAdmin: boolean = false;

  const session = await getSession();

  if (session) {
    isAdmin = await isUserAdmin();
  }
    
  return (
    <>
      <NavBar isAdmin={isAdmin} />
      <Header />
      <RadarCard />
      <Boroughs />
      <Recommendations />
      <Footer />
    </>
  );
}
