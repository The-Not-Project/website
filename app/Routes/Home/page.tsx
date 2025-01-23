'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import {
  DonateButton,
  Header,
  HeaderBackground,
  NavBar,
  RadarOverlay,
  RadarPhoto,
  RadarSection,
} from './page.styles';

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

    setHomePageState((prev) => ({
      ...prev,
      backgroundPosition: offset,
      transparency: newTransparency,
      overlayShrink: isVisible,
    }));
  }

  return (
    <>
      <Header>
        <HeaderBackground $position={homePageState.backgroundPosition} />
        <NavBar $transparency={homePageState.transparency}>
            <Image
              src='/media/logo.png'
              alt='The Not Project Logo'
              width={120}
              height={68}
              priority
            />
          <div className='title-lg'>THE NOT PROJECT</div>
          <DonateButton $transparency={homePageState.transparency}>
            DONATE
          </DonateButton>
        </NavBar>
        <div className='quote'>“Not who they expected, exactly who I am”</div>
        <div className='center-title'>Unbridled Stories, Untamed Voices.</div>
      </Header>
      <RadarSection>
        <RadarOverlay $shrink={homePageState.overlayShrink} ref={radarRef}>
          <p>Our Radar</p>
          <div className='overlay'></div>
        </RadarOverlay>
        <RadarPhoto />
      </RadarSection>
    </>
  );
}
