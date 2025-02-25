'use client';

import { useEffect, useState } from 'react';
import { usePublicServerActions } from '@/app/contexts/public-server-actions';
import { Story } from '@/app/types/types';
import StoriesList from './components/storiesList/storiesList.component';

const defaultFilters = {
    search: '',
    boroughs: [],
    categories: [],
  };

export default function StoriesPage() {
  const { getStories } = usePublicServerActions();
  const [stories, setStories] = useState<Story[]>([]);

  async function fetchStories() {
    const stories = await getStories(defaultFilters, 500);
    setStories(stories);
  }

  useEffect(() => {
    fetchStories();
  }, []);


  return (
    <div>
      <StoriesList stories={stories} />
    </div>
  );
}
