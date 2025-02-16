import { Story as StoryType } from '@/app/types/types';
import {
  ActionsContainer,
  StoryContainer,
  StoryContentContainer,
  StoryImageContainer,
} from './story.styles';
import { Button } from '../shared/Button';

type StoryProps = {
  story: StoryType;
  onDelete: (id: string) => Promise<void>;
  setPopupState: (popupState: {
    showPopup: boolean;
    edit: boolean;
    story: StoryType | null;
  }) => void;
};

export default function Story({ story, onDelete, setPopupState }: StoryProps) {
  const date = new Date(story.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const url = story.media[0].url;

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure?')) {
      try {
        await onDelete(id);
      } catch (error) {
        console.error('Failed to delete story:', error);
      }
    }
  };

  return (
    <StoryContainer>
      <StoryImageContainer src={url} />
      <StoryContentContainer>
        <h2>{story.title}</h2>
        <p>By {`${story.author.firstName} ${story.author.lastName}`}</p>
        <p>Created At {date}</p>
      </StoryContentContainer>
      <ActionsContainer>
        <Button
          className='inverted'
          onClick={() => setPopupState({ showPopup: true, edit: true, story })}
        >
          Edit
        </Button>
        <Button onClick={() => handleDelete(story.id)}>Delete</Button>
      </ActionsContainer>
    </StoryContainer>
  );
}
