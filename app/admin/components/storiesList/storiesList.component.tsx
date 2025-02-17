import Story from '../story/story.component';
import { StoriesContainer, NoStoriesMessage } from './storiesList.styles';
import LoadingPage from '../loadingPage/loadingPage.component';
import type { Story as StoryType } from '@/app/types/types';

type StoriesListProps = {
  stories: StoryType[];
  isLoading: boolean;
  onEdit: (story: StoryType) => void;
  onDelete: (id: string) => Promise<void>;
};

export default function StoriesList({
  isLoading,
  stories,
  onDelete,
  onEdit,
}: StoriesListProps) {
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      {stories.length === 0 ? (
        <NoStoriesMessage>No stories found.</NoStoriesMessage>
      ) : (
        <StoriesContainer>
          {stories.map((story, index) => (
            <Story
              key={index}
              story={story}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </StoriesContainer>
      )}
    </>
  );
}
