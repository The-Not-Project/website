import { LoadingPageContainer } from './loadingPage.styles';
import { ClockLoader, BeatLoader } from 'react-spinners';

type LoadingPageProps = {
  isLoading: boolean;
  isHome: boolean;
};

export default function LoadingPage({ isLoading, isHome }: LoadingPageProps) {
  return (
    <LoadingPageContainer $isLoading={isLoading} $isHome={isHome}>
      {isHome ? <ClockLoader color='white' /> : <BeatLoader color='white' />}
    </LoadingPageContainer>
  );
}
