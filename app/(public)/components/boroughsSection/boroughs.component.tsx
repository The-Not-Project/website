'use client';

import { useEffect, useState } from 'react';
import {
  BoroughsSectionContainer,
  SVGContainer,
  Background,
} from './boroughs.styles';
import { BoroughSummaries as summaries } from '@/app/constants/boroughs';
import MySVG from './svg';
import { useRouter } from 'next/navigation';

export default function Boroughs() {
  const [activeBorough, setActiveBorough] = useState('queens');
  const [summary, setSummary] = useState(summaries.queens);
  const [fileName, setFileName] = useState('queens');
  const router = useRouter();

  useEffect(() => {
    Object.keys(summaries).forEach(borough => {
      const img = new Image();
      img.src = `/media/boroughBackdrops/${borough}.jpg`;
    });
  }, []);

  useEffect(() => {
    const paths = document.querySelectorAll('path');

    const handleClick = (event: Event) => {
      const boroughId = (event.target as SVGElement).id;
      router.push(`/stories/${boroughId}`);
    }

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
      path.addEventListener('click', handleClick);
    });

    return () => {
      paths.forEach(path => {
        path.removeEventListener('mouseenter', handleMouseEnter);
        path.removeEventListener('click', handleClick);
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
      >
        <MySVG />
      </SVGContainer>
    </BoroughsSectionContainer>
  );
}
