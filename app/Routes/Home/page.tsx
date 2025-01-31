'use client';
import { useState, useEffect, useRef } from 'react';
import RadarCard from '@/app/components/radarCard/radarCard.component';
import Header from '@/app/components/homepageHeader/homepageHeader.component';
import Footer from '@/app/components/footer/footer.component';
import Boroughs from '@/app/components/boroughsSection/boroughs.component';

export default function Page() {
  const [homePageState, setHomePageState] = useState({
    transparency: true,
    backgroundPosition: 0,
    overlayShrink: false,
  });
  const radarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const offset = window.scrollY * 0.5;
    const newTransparency = window.scrollY <= 50;

    if (!radarRef.current) return;

    const { top, bottom, height } = radarRef.current.getBoundingClientRect();
    const elementVisibleHeight = height * 0.9;
    const isVisible =
      top + elementVisibleHeight <= window.innerHeight && bottom >= 0;

    setHomePageState(prev => ({
      ...prev,
      backgroundPosition: offset,
      transparency: newTransparency,
      overlayShrink: isVisible,
    }));
  }

  return (
    <>
      <Header
        backgroundPosition={homePageState.backgroundPosition}
        transparency={homePageState.transparency}
      />
      <RadarCard
        overlayShrink={homePageState.overlayShrink}
        radarRef={radarRef as React.RefObject<HTMLDivElement>}
      />
      <Boroughs />
    <Footer />
    </>
  );
}
