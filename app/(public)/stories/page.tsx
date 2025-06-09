import seoKeywords from '@/app/constants/seoKeywords';
import StoriesPageComponent from './components/StoriesPage/storiesPage.component';

export function generateMetadata() {

  const image = '/media/LoAndDavid.png';
  return {
    title: 'Stories | The Not Project',
    description: 'Discover inspiring stories from diverse communities on The Not Project.',
    openGraph: {
      title: 'Stories | The Not Project',
      description: 'Discover inspiring stories from diverse communities on The Not Project.',
      url: 'https://www.thenotproject.com/stories',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'The Not Project Stories',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Stories | The Not Project',
      description: 'Discover inspiring stories from diverse communities on The Not Project.',
      images: [image],
    },
    keywords: seoKeywords.stories,
  };
}
export default function Page() {

  return <StoriesPageComponent />;
}

