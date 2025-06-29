"use client";
import { useEffect, useState } from "react";
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
  Dropdown,
  ProfileIcon,
  ProfileDropdown,
} from "./navbar.styles";
import { FaBars, FaXmark } from "react-icons/fa6";
import clsx from "clsx";
import { useUser } from "@auth0/nextjs-auth0/client";


export default function NavBar() {

  const { user, isLoading } = useUser();

  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const { transparency } = useHeaderScroll();
  const isSpecialPage =
    pathname === "/" ||
    pathname.startsWith("/stories") ||
    pathname === "/about"
  const isBgSolid = isSpecialPage && transparency;
  
  const isMobile = useStore((state) => state.mobileLayout.isMobile);
  const isMenuOpen = useStore((state) => state.mobileLayout.isMenuOpen);
  const setIsMenuOpen = useStore((state) => state.mobileLayout.setIsMenuOpen);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isLoading) return
    
    if (user) {
      setAuthenticated(true);
      fetch("/api/auth/is-admin", {
        method: "POST",
        body: JSON.stringify({ userId: user.sub }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => setIsAdmin(data.isAdmin))
        .catch(() => setIsAdmin(false));
    } else {
      setAuthenticated(false);
      setIsAdmin(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading]);

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

        {authenticated ? (
          <ProfileDropdown
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {!isMobile ? (
              <>
                <ProfileIcon />
                <Dropdown className={clsx({ closed: !isDropdownOpen })}>
                  <p>MY ACCOUNT</p>
                  {isAdmin ? (
                    <Link href="/admin">ADMIN</Link>
                  ) : (
                    <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                      PROFILE
                    </Link>
                  )}
                  <AuthLink href="/api/auth/logout">LOG OUT</AuthLink>
                </Dropdown>
              </>
            ) : (
              <Dropdown>
                <ProfileIcon />
                <AuthLink
                  href="/api/auth/logout"
                  className={clsx(solidClass, "mobile")}
                >
                  LOG OUT
                </AuthLink>
              </Dropdown>
            )}
          </ProfileDropdown>
        ) : (
          <AuthLink href="/api/auth/login" className={`${solidClass} bottom`}>
            SIGN IN
          </AuthLink>
        )}

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
