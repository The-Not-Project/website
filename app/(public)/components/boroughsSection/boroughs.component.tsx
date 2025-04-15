'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/app/zustand/store';
import {
  BoroughsSectionContainer,
  SVGContainer,
  Background,
} from './boroughs.styles';
import { BoroughSummaries as summaries } from '@/app/constants/boroughs';
import MapSVG from './MapSVG';
import CompactMap from './MapSGVCompact';

export default function Boroughs() {
  const [activeBorough, setActiveBorough] = useState<string | undefined>(undefined);
  const [summary, setSummary] = useState(summaries.queens);
  const [fileName, setFileName] = useState('queens');
  const isMobile = useStore(state => state.mobileLayout.isMobile);

  const router = useRouter();

  useEffect(() => {
    Object.keys(summaries).forEach(borough => {
      const img = new Image();
      img.src = `/media/boroughBackdrops/${borough}.jpg`;
    });
  }, []);

  const handleClick = (borough: string) => {
    if (window.innerWidth <= 600) {
      if (borough === activeBorough) setActiveBorough(undefined);
      setActiveBorough(borough);
    } else {
      router.push(`/stories/${borough}`);
    }
  };

  const handleMouseEnter = (borough: string) => {
    if (borough === activeBorough) return;

    setActiveBorough(borough);

    setTimeout(() => {
      setFileName(borough);
    }, 100);

    setTimeout(() => {
      setSummary(summaries[borough as keyof typeof summaries]);
    }, 333);
  };

  return (
    <BoroughsSectionContainer key={activeBorough}>
      {!isMobile && (
        <>
          <Background $fileName={fileName}>
            <div className='background-image' />
          </Background>
          <h1>Which Borough speaks to you?</h1>
          <div className='description'>
            <h2>{summary.boroughName}</h2>
            <p>{summary.description}</p>
          </div>
        </>
      )}
      {/* <div className='background-slideshow'>
        <div className='slide-track'>
          <img src='media/boroughBackdrops/bronx.jpg' alt='Slide 1' />
          <img src='media/boroughBackdrops/manhattan.jpg' alt='Slide 2' />
          <img src='media/boroughBackdrops/queens.jpg' alt='Slide 3' />
          <img src='media/boroughBackdrops/brooklyn.jpg' alt='Slide 4' />
          <img src='media/boroughBackdrops/statenisland.jpg' alt='Slide 5' />
          <img src='media/boroughBackdrops/bronx.jpg' alt='Slide 1' />
        </div>
      </div> */}
      <SVGContainer>
        {isMobile ? (
          <CompactMap
            activeBorough={activeBorough}
            onClickAction={handleClick}
          />
        ) : (
          <MapSVG
            activeBorough={activeBorough}
            onMouseEnterAction={handleMouseEnter}
            onClickAction={handleClick}
          />
        )}
      </SVGContainer>
    </BoroughsSectionContainer>
  );
}
