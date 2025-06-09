"use client";

import clsx from "clsx";
import { useEffect } from "react";
import CollabForm from "./components/collab";
import ContactForm from "./components/feedback";
import { ContactContainer } from "./styles";
import { useStore } from "@/app/zustand/store";

export default function ContactPage() {

  const setIsMobile = useStore((state) => state.mobileLayout.setIsMobile);
  const isMenuOpen = useStore((state) => state.mobileLayout.isMenuOpen);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 850) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContactContainer  className={clsx('page-wrapper', { shifted: isMenuOpen })}>
      <ContactForm />
      <CollabForm />
    </ContactContainer>
  );
}
