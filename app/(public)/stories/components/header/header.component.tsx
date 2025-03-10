import { useAppContext } from '@/app/contexts/public-app-actions';
import { BoroughDescription, HeaderContainer } from './header.styles';
import BoroughSelection from '../boroughSelection/boroughSelection.component';

export default function HeaderComponent() {
  const { currentBorough } = useAppContext();
  return (
    <HeaderContainer $filename={currentBorough.fileName}>
      <BoroughSelection      />
      <BoroughDescription>{currentBorough.description}</BoroughDescription>
    </HeaderContainer>
  );
}
