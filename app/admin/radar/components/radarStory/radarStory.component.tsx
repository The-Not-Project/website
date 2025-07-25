import { Story } from '@/app/types/types';
import {
  RadarDescription,
  RadarPhoto,
  RadarCardContainer,
  DeleteButton,
} from './radarStory.styles';

type RadarStoryProps = {
  story: Story;
  onDeleteAction: () => void;
};

export default function RadarCard({
  story,
  onDeleteAction,
}: RadarStoryProps) {

  const thumbnail = story.media.find(media => media.isThumbnail)?.url || '';

  return (
    <>
      <RadarCardContainer>
        <RadarDescription>
          <h2 className='title'>{story.title}</h2>
          <p className='summary'>“{story.summary}”</p>
          <p className='author'>
            By {`${story.author.firstName} ${story.author.lastName}`}
          </p>
        </RadarDescription>
        <RadarPhoto $url={thumbnail} />
      </RadarCardContainer>
      <DeleteButton onClick={() => onDeleteAction()}>Delete</DeleteButton>
    </>
  );
}
