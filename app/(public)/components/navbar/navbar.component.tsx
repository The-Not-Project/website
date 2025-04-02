'use client';
import Image from 'next/image';
import { DonateButton, NavBarContainer, AuthLink, Link } from './navbar.styles';
import useHeaderScroll from '@/app/hooks/useHeaderScroll';
import { useRouter, usePathname } from 'next/navigation';

type NavBarProps = {
  isAdmin: boolean;
  authenticated: boolean;
};

export default function NavBar({ isAdmin, authenticated }: NavBarProps) {
  const pathname = usePathname();
  const { transparency } = useHeaderScroll();
  const isSpecialPage = pathname === '/' || pathname.startsWith('/stories');
  const isBgSolid = isSpecialPage && transparency;
  const router = useRouter();

  const navContainerClass = isBgSolid
    ? 'solid isSpecialPage'
    : isSpecialPage
    ? 'isSpecialPage'
    : undefined;
  const solidClass = isBgSolid ? 'solid' : undefined;

  return (
    <NavBarContainer className={navContainerClass}>
      <Link href='/'>
        <Image
          src='/media/logo.png'
          alt='The Not Project Logo'
          width={120}
          height={68}
        />
      </Link>
      <h1 className='title-lg'>THE NOT PROJECT</h1>
      <div>
        <Link href='/stories' className={solidClass}>
          STORIES
        </Link>
        {isAdmin && (
          <Link href='/admin' className={solidClass}>
            ADMIN
          </Link>
        )}
        <AuthLink
          href={`/api/auth/${authenticated ? 'logout' : 'login'}`}
          className={solidClass}
        >
          {authenticated ? 'LOG OUT' : 'SIGN IN'}
        </AuthLink>
          <Link href='/about' className={solidClass}>
            ABOUT US
          </Link>
        {/* <DonateButton
          className={solidClass}
          onClick={() => router.push('/donate')}
        >
          DONATE
        </DonateButton> */}
      </div>
    </NavBarContainer>
  );
}
