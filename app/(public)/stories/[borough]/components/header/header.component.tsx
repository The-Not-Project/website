import { BoroughDescription, HeaderContainer } from './header.styles';
import BoroughSelection from '../boroughSelection/boroughSelection.component';

type HeaderProps = {
  borough: {
    fileName: string;
    boroughName: string;
    description: string;
  };
};

export default function HeaderComponent({ borough }: HeaderProps) {
  return (
    <HeaderContainer $filename={borough.fileName}>
      <BoroughSelection borough={borough.boroughName} />
      <BoroughDescription>{borough.description}</BoroughDescription>
    </HeaderContainer>
  );
}
