import Image from 'next/image';
import { DonateButton, NavBarContainer } from './navbar.styles';

type NavBarProps = {
    transparency: boolean;
    };

export default function NavBar({transparency}: NavBarProps) {
  return (
    <NavBarContainer $transparency={transparency}>
      <Image
        src='/media/logo.png'
        alt='The Not Project Logo'
        width={120}
        height={68}
        priority
      />
      <div className='title-lg'>THE NOT PROJECT</div>
      <DonateButton $transparency={transparency}>
        DONATE
      </DonateButton>
    </NavBarContainer>
  );
}
