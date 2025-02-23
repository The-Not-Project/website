import { Story } from '@/app/types/types';
import LoadingPage from '../loadingPage/loadingPage.component';
import {
  RadarDescription,
  RadarPhoto,
  RadarCardContainer,
  DeleteButton,
} from './radarStory.styles';

type RadarStoryProps = {
  story: Story;
  isLoading: boolean;
  onDeleteAction: () => void;
};

export default function RadarCard({ story, isLoading, onDeleteAction }: RadarStoryProps) {

    const url = story.media[0]?.url
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <RadarCardContainer>
        <RadarDescription>
          <h2 className='title'>{story.title}</h2>
          <p className='summary'>
            “A summary either written by us or AI generated using a language
            model API type shit Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure cum repellendus doloribus officiis ipsa
            obcaecati voluptatum maxime temporibus dolorum corrupti.”
          </p>
          <p className='author'>By {`${story.author.firstName} ${story.author.lastName}`}</p>
        </RadarDescription>
        <RadarPhoto $url={url} />
      </RadarCardContainer>
      <DeleteButton onClick={() => onDeleteAction()}>Delete</DeleteButton>
    </>
  );
}
