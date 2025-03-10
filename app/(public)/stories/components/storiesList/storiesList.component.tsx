import { Story as StoryType } from '@/app/types/types';
import Story from '../story/story.component';
import { NoStoriesMessage, StoriesListContainer } from './storiesList.styles';

export default function StoriesList({ stories }: { stories: StoryType[] }) {

  return (
    <StoriesListContainer>
      { stories.length > 0 ? stories.map(story => (
        <Story key={story.id} story={story} />
      )) : (
        <NoStoriesMessage>No Stories Found</NoStoriesMessage>
      )}
    </StoriesListContainer>
  );
}
