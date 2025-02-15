import { useEffect, useState } from 'react';
import type { Story as StoryType } from '@/app/types/types';
import { useServerActions } from '@/app/contexts/server-actions';
import Story from '../story/story.component';
import { StoriesContainer } from './storiesList.styles';
import LoadingPage from '../loadingPage/loadingPage.component';

export default function StoriesList() {
  const { getStories } = useServerActions();
  const [stories, setStories] = useState<StoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      const stories = await getStories();
      setStories(stories);
      setLoading(false);
    };
    fetchStories();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <StoriesContainer>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </StoriesContainer>
  );
}
