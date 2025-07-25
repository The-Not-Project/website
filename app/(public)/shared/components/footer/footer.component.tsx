"use client";

import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/app/zustand/store";
import SubscribeForm from "./components/subscribeForm/form.component";
import BottomBar from "./components/bottomBar/bottomBar.component";

import {
  Footer,
  MainContent,
  NavSection,
  Instagram,
  Youtube,
  X,
} from "./footer.styles";
import clsx from "clsx";

export default function FooterComponent() {
  const isMenuOpen = useStore((state) => state.mobileLayout.isMenuOpen);
  const isMobile = useStore((state) => state.mobileLayout.isMobile);

  const footerSections = [
    {
      title: "Company",
      items: [
        { label: "Contact Us", href: "/contact" },
        { label: "Collaborations", href: "/contact" },
        { label: "FAQ", href: "/about" },
      ],
    },
    {
      title: "Our Socials",
      items: [
        {
          href: "https://www.instagram.com/_thenotproject",
          icon: <Instagram />,
          ariaLabel: "Instagram",
        },
        {
          href: "https://www.youtube.com/@thenotproject",
          icon: <Youtube />,
          ariaLabel: "YouTube",
        },
        {
          href: "https://x.com/TheNotProject",
          icon: <X />,
          ariaLabel: "X",
        },
      ],
    },
  ];

  return (
    <Footer className={clsx("page-wrapper", { shifted: isMenuOpen })}>
      <MainContent>
        <div className="logoSection">
          <Image
            src="/media/logo.png"
            alt="The Not Project Logo"
            width={120}
            height={68}
          />
        </div>

        {footerSections.map(({ title, items }) => (
          <NavSection key={title}>
            <h2>{title}</h2>
            <ul>
              {items.map((item, i) => (
                <li key={i}>
                  {"icon" in item ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.ariaLabel}
                    >
                      {item.icon}
                    </a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </NavSection>
        ))}

        <SubscribeForm />
      </MainContent>

      <BottomBar isMobile={isMobile} />
    </Footer>
  );
}
