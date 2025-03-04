import Image from 'next/image';
import { LoadingPageContainer } from './loadingPage.styles';
import { ClockLoader, BeatLoader } from 'react-spinners';

type LoadingPageProps = {
  isLoading: boolean;
  isHome: boolean;
};

export default function LoadingPage({ isLoading, isHome }: LoadingPageProps) {
  return (
    <LoadingPageContainer $isLoading={isLoading} $isHome={isHome}>
      {isHome ? (
        <Image
          src='/media/its_in_motion.png'
          width={300}
          height={300}
          alt='logo'
        />
      ) : (
        <BeatLoader color='white' />
      )}
    </LoadingPageContainer>
  );
}
