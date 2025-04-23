'use client';
import { useEffect } from 'react';
import StoriesPageComponent from './components/StoriesPage/storiesPage.component';
import { useStore } from '@/app/zustand/store';

export default function StoriesPage() {

    const setIsMobile = useStore(state => state.mobileLayout.setIsMobile);
  

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 600);
      
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return <StoriesPageComponent />;
}

