import { BoroughDescription, HeaderContainer } from './header.styles';
import BoroughSelection from '../boroughSelection/boroughSelection.component';
import { BoroughSummaries } from '@/app/constants/boroughs';

export default function HeaderComponent({ borough }: { borough: string }) {
  const currentBorough = BoroughSummaries[borough as keyof typeof BoroughSummaries];
  return (
    <HeaderContainer $filename={borough}>
      <BoroughSelection borough={borough}/>
      <BoroughDescription>{currentBorough.description}</BoroughDescription>
    </HeaderContainer>
  );
}
