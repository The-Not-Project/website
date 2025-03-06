'use client';

import { useEffect, useState } from 'react';
import {
  BoroughsSectionContainer,
  SVGContainer,
  Background,
} from './boroughs.styles';
import { BoroughSummaries as summaries } from '@/app/constants/boroughs';
import MySVG from './svg';

export default function Boroughs() {
  const [activeBorough, setActiveBorough] = useState('queens');
  const [summary, setSummary] = useState(summaries.queens);
  const [fileName, setFileName] = useState('queens');

  useEffect(() => {
    Object.keys(summaries).forEach(borough => {
      const img = new Image();
      img.src = `/media/boroughBackdrops/${borough}.jpg`;
    });
  }, []);

  useEffect(() => {
    const paths = document.querySelectorAll('path');

    const handleMouseEnter = (event: Event) => {
      const boroughId = (event.target as SVGElement).id;
      if (boroughId === activeBorough) return;

      setActiveBorough(boroughId);

      setTimeout(() => {
        setFileName(boroughId);
      }, 100);

      setTimeout(() => {
        setSummary(summaries[boroughId as keyof typeof summaries]);
      }, 333);
    };

    paths.forEach(path => {
      path.addEventListener('mouseenter', handleMouseEnter);
    });

    return () => {
      paths.forEach(path => {
        path.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, [activeBorough]);

  return (
    <BoroughsSectionContainer key={activeBorough}>
      <Background $fileName={fileName}>
        <div className='background-image' />
      </Background>
      <h1>Which Borough speaks to you?</h1>
      <div className='description'>
        <h2>{summary.borough}</h2>
        <p>{summary.description}</p>
      </div>
      <SVGContainer
        $activeBorough={activeBorough}
        onClick={() => alert("Doesn't do anything yet, fool.")}
      >
        <MySVG />
      </SVGContainer>
    </BoroughsSectionContainer>
  );
}
