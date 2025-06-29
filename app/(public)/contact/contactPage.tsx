"use client";

import clsx from "clsx";
import { useEffect } from "react";
import CollabForm from "./components/collab";
import ContactForm from "./components/feedback";
<<<<<<< HEAD
import { ContactContainer, FormImage } from "./styles";
=======
import { ContactContainer, HeaderContainer, HeaderImage } from "./styles";
>>>>>>> b296d47fb34ec12cdc05ebf4ff1eabf6df62daf6
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
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
<<<<<<< HEAD
    <ContactContainer  className={clsx('page-wrapper', { shifted: isMenuOpen })}>
      <ContactForm />
      {/* <CollabForm /> */}
      <FormImage src="/media/LorenzoInFlushing.jpg" alt="Lorenzo in Flushing" />
    </ContactContainer>
=======
    <>
      <HeaderContainer>
        <HeaderImage
          src="/media/tariq&IceCream.jpg"
          alt="About Us"
          width={1920}
          height={1080}
        />
      </HeaderContainer>
      <ContactContainer
        className={clsx("page-wrapper", { shifted: isMenuOpen })}
      >
        <ContactForm />
        <CollabForm />
      </ContactContainer>
    </>
>>>>>>> b296d47fb34ec12cdc05ebf4ff1eabf6df62daf6
  );
}
