'use client';

import './page.scss';
import { useState, useEffect } from 'react';
import RadarCard from './components/radarCard/radarCard.component';
import Header from './components/homepageHeader/homepageHeader.component';
import Boroughs from './components/boroughsSection/boroughs.component';
import Recommendations from './components/recommendations/recommendations.component';
import LoadingPage from './components/loadingPage/loadingPage.component';
import './page.scss'

export default function PublicPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      {showLoader && <LoadingPage isLoading={isLoading} isHome={true} />}
      <Header />
      <RadarCard setLoadingAction={setIsLoading} />
      <Boroughs />
      <Recommendations />
    </>
  );
}
