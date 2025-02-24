'use client';
import Image from 'next/image';
import { DonateButton, NavBarContainer, AuthLink } from './navbar.styles';
import { useUser } from '@auth0/nextjs-auth0/client';
import useHeaderScroll from '@/app/hooks/useHeaderScroll';

type NavBarProps = {
  isAdmin: boolean;
};

export default function NavBar({ isAdmin }: NavBarProps) {

  const { user } = useUser();

  const { transparency } = useHeaderScroll();

  return (
    <NavBarContainer className={!transparency ? 'scrolled' : undefined}>
      <Image
        src='/media/logo.png'
        alt='The Not Project Logo'
        width={120}
        height={68}
      />
      <h1 className='title-lg'>THE NOT PROJECT</h1>
      <div>
        {isAdmin && (
          <AuthLink
            href='/admin'
            className={!transparency ? 'scrolled' : undefined}
          >
            ADMIN
          </AuthLink>
        )}
        {!user ? (
          <AuthLink
            href='/api/auth/login'
            className={!transparency ? 'scrolled' : undefined}
          >
            SIGN IN
          </AuthLink>
        ) : (
          <>
            {'  '}
            <AuthLink
              href='/api/auth/logout'
              className={!transparency ? 'scrolled' : undefined}
            >
              LOG OUT
            </AuthLink>
          </>
        )}

        <DonateButton className={!transparency ? 'scrolled' : undefined}>
          DONATE
        </DonateButton>
      </div>
    </NavBarContainer>
  );
}
