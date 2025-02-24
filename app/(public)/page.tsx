import './page.scss';
import RadarCard from './components/radarCard/radarCard.component';
import Header from './components/homepageHeader/homepageHeader.component';
import Boroughs from './components/boroughsSection/boroughs.component';
import Recommendations from './components/recommendations/recommendations.component';

export default async function PublicPage() {


  return (
    <>
      <Header />
      <RadarCard />
      <Boroughs />
      <Recommendations />
    </>
  );
}
