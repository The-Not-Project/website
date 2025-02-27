'use client';
import Image from 'next/image';
import { DonateButton, NavBarContainer, AuthLink, Link } from './navbar.styles';
import useHeaderScroll from '@/app/hooks/useHeaderScroll';
import { usePathname } from 'next/navigation';

type NavBarProps = {
  isAdmin: boolean;
  authenticated: boolean;
};

export default function NavBar({ isAdmin, authenticated }: NavBarProps) {

  const pathname = usePathname();
  const { transparency } = useHeaderScroll();
  const isHome = pathname === '/';
  const isBgSolid = isHome && transparency;
  
    

  return (
    <NavBarContainer className={isBgSolid ? 'solid isHome' : isHome ? 'isHome' : undefined}> 
      <Image
        src='/media/logo.png'
        alt='The Not Project Logo'
        width={120}
        height={68}
      />
      <h1 className='title-lg'>THE NOT PROJECT</h1>
      <div>
        <Link href='/stories' className={isBgSolid ? 'solid' : undefined}>
          STORIES
        </Link>
        {isAdmin && (
          <Link
            href='/admin'
            className={isBgSolid ? 'solid' : undefined}
          >
            ADMIN
          </Link>
        )}
        {!authenticated ? (
          <AuthLink
            href='/api/auth/login'
            className={isBgSolid ? 'solid' : undefined}
          >
            SIGN IN
          </AuthLink>
        ) : (
          <>
            {'  '}
            <AuthLink
              href='/api/auth/logout'
              className={isBgSolid ? 'solid' : undefined}
            >
              LOG OUT
            </AuthLink>
          </>
        )}
        <DonateButton className={isBgSolid ? 'solid' : undefined}>
          DONATE
        </DonateButton>
      </div>
    </NavBarContainer>
  );
}
