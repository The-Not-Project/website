import { Story as StoryType } from '@/app/types/types';
import Story from '../story/story.component';
import { StoriesListContainer } from './storiesList.styles';

export default function StoriesList({ stories }: { stories: StoryType[] }) {
  return (
    <>
      {/* <h1>Stories</h1> */}
      <StoriesListContainer>
        {stories.map(story => (
          <Story key={story.id} story={story} />
        ))}
      </StoriesListContainer>
    </>
  );
}
