"use client";

import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/app/zustand/store";

import {
  Footer,
  MainContent,
  NavSection,
  SignUpSection,
  SignUpForm,
  SignUp,
  ConsentText,
  BottomBar,
  LegalLinks,
  Instagram,
  Youtube,
  X,
  Copyright,
} from "./footer.styles";
import clsx from "clsx";

export default function FooterComponent() {
  const isMenuOpen = useStore((state) => state.mobileLayout.isMenuOpen);

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
        <NavSection>
          <h2>Company</h2>
          <ul>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/contact">Collaborations</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </NavSection>

        <NavSection>
          <h2>Our Socials</h2>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/_thenotproject"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@thenotproject"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <Youtube />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/TheNotProject"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <X />
              </a>
            </li>
          </ul>
        </NavSection>

        <SignUpSection>
          <h2>Never Miss Out</h2>
          <SignUpForm>
            <p>Be the first to know about our new stories.</p>
            <SignUp>
              <input type="email" placeholder="Email address" />
              <input type="tel" placeholder="Phone number" />
              <button type="submit">Sign Up</button>
            </SignUp>
          </SignUpForm>
          <ConsentText>
            By entering your phone number and submitting this form, you consent
            to receive marketing text messages from The Not Project at the
            number provided, including messages sent by autodialer. Message and
            data rates may apply. Message frequency varies. You can unsubscribe
            at any time by replying STOP or clicking the unsubscribe link (where
            available) in one of our messages. View our{" "}
            <Link href="/privacy">Privacy Policies</Link> and{" "}
            <Link href="/terms">Terms & Conditions</Link>.
          </ConsentText>
        </SignUpSection>
      </MainContent>

      <BottomBar>
        <Copyright>© The Not Project</Copyright>
        <LegalLinks>
          <Link href="/privacy">Privacy Policies</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </LegalLinks>
        <Copyright>2025</Copyright>
      </BottomBar>
    </Footer>
  );
}
