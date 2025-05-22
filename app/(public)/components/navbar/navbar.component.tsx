"use client";
import { useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import useHeaderScroll from "@/app/hooks/useHeaderScroll";
import { useStore } from "@/app/zustand/store";
import {
  NavBarContainer,
  AuthLink,
  Link,
  MenuIcon,
  Menu,
} from "./navbar.styles";
import { FaBars, FaXmark } from "react-icons/fa6";

type NavBarProps = {
  isAdmin: boolean;
  authenticated: boolean;
};

export default function NavBar({ isAdmin, authenticated }: NavBarProps) {
  const pathname = usePathname();
  const { transparency } = useHeaderScroll();
  const isSpecialPage = pathname === "/" || pathname.startsWith("/stories");
  const isBgSolid = isSpecialPage && transparency;
  const isMobile = useStore((state) => state.mobileLayout.isMobile);
  const router = useRouter();

  const isMenuOpen = useStore((state) => state.mobileLayout.isMenuOpen);
  const setIsMenuOpen = useStore((state) => state.mobileLayout.setIsMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navContainerClass = isBgSolid
    ? "solid isSpecialPage"
    : isSpecialPage
    ? "isSpecialPage"
    : undefined;
  const solidClass = isBgSolid ? "solid" : undefined;

  return (
    <NavBarContainer
      className={`${navContainerClass} ${isMenuOpen && "shifted"}`}
    >
      <h1 className="title-lg" onClick={() => router.push("/")}>
        THE NOT PROJECT
      </h1>
      {!isMobile && (
        <Link href="/">
          <Image
            src="/media/logo.png"
            alt="The Not Project Logo"
            width={120}
            height={68}
          />
        </Link>
      )}
      {isMobile && (
        <>
          <MenuIcon
            className={!isMenuOpen ? solidClass : "solid"}
            onClick={() => setIsMenuOpen(true)}
          >
            {!isMenuOpen && <FaBars />}
          </MenuIcon>
        </>
      )}

      <Menu className={isMenuOpen ? "open" : undefined}>
        {isMobile && (
          <>
            <Image
              src="/media/logo.png"
              alt="The Not Project Logo"
              width={120}
              height={68}
            />
            <FaXmark className="close" onClick={() => setIsMenuOpen(false)} />
            <Link
              href="/"
              className={solidClass}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
          </>
        )}

        {authenticated &&
          (isAdmin ? (
            <Link href="/admin" className={solidClass}>
              ADMIN
            </Link>
          ) : (
            <Link href="/profile" className={solidClass}>
              ME
            </Link>
          ))}
        <Link
          href="/stories"
          className={solidClass}
          onClick={() => setIsMenuOpen(false)}
        >
          STORIES
        </Link>
        <Link
          href="/about"
          className={solidClass}
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT US
        </Link>
        <AuthLink
          href={`/api/auth/${authenticated ? "logout" : "login"}`}
          className={solidClass}
        >
          {authenticated ? "LOG OUT" : "SIGN IN"}
        </AuthLink>

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
