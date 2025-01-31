'use client';

import { useEffect, useState } from 'react';
import {
  DiscoverMoreSection,
  SVGContainer,
  Background,
} from './boroughs.styles';
import MySVG from './svg';

export default function Discover() {
  
    const summaries = [
      {
        borough: 'The Bronx',
        description:
          'The Bronx is a borough of New York City, coextensive with Bronx County, in the U.S. state of New York. It is south of Westchester County; northeast and east of Manhattan, across the Harlem River; and north of Queens, across the East River.',
      },
      {
        borough: 'Manhattan',
        description:
          'Manhattan is the most densely populated of the five boroughs of New York City. The borough is coterminous with New York County, an original county of the U.S. state of New York.',
      },
      {
        borough: 'Queens',
        description:
          'Queens is a borough of New York City, coextensive with Queens County, in the U.S. state of New York. Located on Long Island, it is the largest borough of New York City in area and is adjacent to the borough of Brooklyn at the western end of Long Island.',
      },
      {
        borough: 'Brooklyn',
        description:
          'Brooklyn is the most populous borough of New York City, with a census-estimated 2,648,403 residents in 2020. Named after the Dutch village of Breukelen, it shares a land border with the borough of Queens, at the western end of Long Island.',
      },
      {
        borough: 'Staten Island',
        description:
          'Staten Island is a borough of New York City, coextensive with Richmond County, in the U.S. state of New York. Located in the southwest portion of the city, the borough is separated from New Jersey by the Arthur Kill and the Kill Van Kull and from the rest of New York by New York Bay.',
      },
    ]

    const [activeBoroughIndex, setActiveBoroughIndex] = useState(-1);
    const [delayedSummary, setDelayedSummary] = useState(summaries[0]);
    const [delayedUrl, setDelayedUrl] = useState(0);
    const [hoverKey, setHoverKey] = useState(0);
    
    useEffect(() => {
      const preloadImages = () => {
        summaries.forEach((summary, index) => {
          const img = new Image();
          img.src = `/media/boroughsCards/${index}.jpg`; // Adjust path as needed
        });
      };
    
      const boroughs = document.querySelectorAll('path');
    
      const handleMouseEnter = (event: Event) => {
        const currentIndex = Array.from(boroughs).indexOf(event.target as SVGPathElement);
        if (currentIndex === activeBoroughIndex) return;  

        setActiveBoroughIndex(currentIndex);
        setHoverKey(prev => prev + 1);
    
        setTimeout(() => {
          setDelayedUrl(currentIndex);
        }, 100);

        setTimeout(() => {
          setDelayedSummary(summaries[currentIndex]);
        }, 333);
      };
    
      boroughs.forEach((borough) => {
        borough.addEventListener('mouseenter', handleMouseEnter);
      });

      preloadImages();
    
      return () => {
        boroughs.forEach((borough) => {
          borough.removeEventListener('mouseenter', handleMouseEnter);
        });
      };
    }, [activeBoroughIndex]);
  
  
    return (
      <DiscoverMoreSection $activeIndex={activeBoroughIndex} key={`text-${hoverKey}`}>
        <Background $activeIndex={activeBoroughIndex} $url={delayedUrl} key={`bg-${hoverKey}`}/>
        <h1>Which Borough speaks to you?</h1>
        <div className='description'>
          <h2>{delayedSummary.borough}</h2>
          <p>
            {delayedSummary.description}
          </p>
        </div>
        <SVGContainer $activeIndex={activeBoroughIndex}>
          <MySVG />
        </SVGContainer>
      </DiscoverMoreSection>
    );
  }