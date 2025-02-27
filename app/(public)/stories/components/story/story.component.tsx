import { Story as StoryType } from '@/app/types/types';
import {
  StoryContainer,
  StoryContent,
  CategoriesContainer,
  Category,
} from './story.styles';
import Image from 'next/image';

export default function Story({ story }: { story: StoryType }) {
  const thumbnail = story.media.find(media => media.isThumbnail === true)?.url;
  const date = new Date(story.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <StoryContainer>
      <Image src={thumbnail || ''} width={280} height={150} alt='thumbnail' />
      <StoryContent>
        <p className='createdAt'>{date}</p>
        <h2 className='title'>{story.title}</h2>
        <p>By {`${story.author.firstName} ${story.author.lastName}`}</p>
        {story.categories.length > 0 && (
          <CategoriesContainer>
            {story.categories.map(category => (
              <Category key={category.id}>{category.name}</Category>
            ))}
          </CategoriesContainer>
        )}
      </StoryContent>
    </StoryContainer>
  );
}
