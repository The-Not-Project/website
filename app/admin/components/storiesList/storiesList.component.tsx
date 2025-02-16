import Story from '../story/story.component';
import { StoriesContainer } from './storiesList.styles';
import LoadingPage from '../loadingPage/loadingPage.component';
import type { Story as StoryType } from '@/app/types/types';


type StoriesListeProps = {
  stories: StoryType[];
  isLoading: boolean;
  setPopupState: (popupState: {
    showPopup: boolean;
    edit: boolean;
    story: StoryType | null;
  }) => void;
  onDelete: (id: string) => Promise<void>;
};

export default function StoriesList({isLoading, stories, onDelete, setPopupState}: StoriesListeProps) {


  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <StoriesContainer>
      {stories.map((story, index) => (
        <Story key={index} story={story} onDelete={onDelete} setPopupState={setPopupState}/>
      ))}
    </StoriesContainer>
  );
}
