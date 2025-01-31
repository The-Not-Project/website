import { HeaderBackground, HeaderContainer } from './homepageHeader.styles';
import NavBar from '../navbar/navbar.component';

type HomePageHeaderProps = {
  backgroundPosition: number;
  transparency: boolean;
};

export default function HomePageHeader({
  backgroundPosition, transparency
}: HomePageHeaderProps) {
  return (
    <HeaderContainer>
      <HeaderBackground $position={backgroundPosition} />
        <NavBar transparency={transparency} />
      <div className='quote'>“Not who they expected, exactly who I am”</div>
      <div className='center-title'>Unbridled Stories, Untamed Voices.</div>
    </HeaderContainer>
  );
}
