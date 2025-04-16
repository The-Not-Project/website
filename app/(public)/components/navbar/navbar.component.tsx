'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useHeaderScroll from '@/app/hooks/useHeaderScroll';
import { useStore } from '@/app/zustand/store';
import {
  NavBarContainer,
  AuthLink,
  Link,
  MenuIcon,
  Menu,
} from './navbar.styles';
import { FaBars, FaXmark } from 'react-icons/fa6';

type NavBarProps = {
  isAdmin: boolean;
  authenticated: boolean;
};

export default function NavBar({ isAdmin, authenticated }: NavBarProps) {
  const pathname = usePathname();
  const { transparency } = useHeaderScroll();
  const isSpecialPage = pathname === '/' || pathname.startsWith('/stories');
  const isBgSolid = isSpecialPage && transparency;
  // const router = useRouter();

  const isMenuOpen = useStore(state => state.mobileLayout.isMenuOpen);
  const setIsMenuOpen = useStore(state => state.mobileLayout.setIsMenuOpen);
  const isMobile = useStore(state => state.mobileLayout.isMobile);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsMenuOpen(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navContainerClass = isBgSolid
    ? 'solid isSpecialPage'
    : isSpecialPage
    ? 'isSpecialPage'
    : undefined;
  const solidClass = isBgSolid ? 'solid' : undefined;

  return (
    <NavBarContainer
      className={`${navContainerClass} ${isMenuOpen && 'shifted'}`}
    >
      <h1 className='title-lg'>THE NOT PROJECT</h1>
      {!isMobile && (
        <Link href='/'>
          <Image
            src='/media/logo.png'
            alt='The Not Project Logo'
            width={120}
            height={68}
          />
        </Link>
      )}
      {isMobile && (
        <>
          <MenuIcon
            className={!isMenuOpen ? solidClass : 'solid'}
            onClick={() => setIsMenuOpen(true)}
          >
            {!isMenuOpen && <FaBars />}
          </MenuIcon>
        </>
      )}

      <Menu className={isMenuOpen ? 'open' : undefined}>
        {isMobile && (
          <>
            <Image
              src='/media/logo.png'
              alt='The Not Project Logo'
              width={120}
              height={68}
            />
             <FaXmark className='close' onClick={() => setIsMenuOpen(false)} />
          </>
        )}
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
      </Menu>
    </NavBarContainer>
  );
}
