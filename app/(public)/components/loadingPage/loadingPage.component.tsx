import { LoadingPageContainer } from "./loadingPage.styles";
import {ClockLoader as Loader} from 'react-spinners'

export default function LoadingPage({ isLoading }: { isLoading: boolean }) {
  return (
    <LoadingPageContainer $isLoading={isLoading}>
      <Loader color="white" />
    </LoadingPageContainer>
  );
}
