'use client'

import { HeaderBackground, HeaderContainer } from './homepageHeader.styles';
import NavBar from '../navbar/navbar.component';
import useHeaderScroll from '@/app/hooks/useHeaderScroll';

type HomePageHeaderProps = {

};

export default function HomePageHeader({}: HomePageHeaderProps) {

  const { backgroundPosition } = useHeaderScroll();
  
  return (
    <HeaderContainer>
      <HeaderBackground $position={backgroundPosition} />
      <div className='quote'>“Not who they expected, exactly who I am”</div>
      <div className='center-title'>Unbridled Stories, Untamed Voices.</div>
    </HeaderContainer>
  );
}
