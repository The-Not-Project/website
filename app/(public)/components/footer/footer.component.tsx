"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FooterContainer,
  MainContent,
  Youtube,
  Instagram,
  NavSection,
  SignUpSection,
  SignUpForm,
  SignUp,
  ConsentText,
  BottomBar,
  SocialLinks,
  LegalLinks,
  Copyright,
  Foot3r,
} from "./footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <Foot3r>
        <MainContent>
          <div className="logoSection">
            {/* <h3>Logo</h3> */}
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
                <Link href="/publications">Publications</Link>
              </li>
              <li>
                <Link href="/mission">Mission</Link>
              </li>
              <li>
                <Link href="/members">Members</Link>
              </li>
              <li>
                <Link href="/story">Story</Link>
              </li>
            </ul>
          </NavSection>

          <NavSection>
            <h2>Support</h2>
            <ul>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/instagram">Instagram</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </NavSection>

          <SignUpSection>
            <h2>Never Miss Out</h2>
            <SignUpForm>
              <p>Be the first to know about our new stories</p>
              <SignUp>
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <button type="submit">SIGN UP</button>
              </SignUp>
            </SignUpForm>
            <ConsentText>
              By entering your phone number and submitting this form, you
              consent to receive marketing text messages from The Not Project at
              the number provided, including messages sent by auto dialer.
              Message and data rates may apply. Message frequency varies. You
              can unsubscribe at any time by replying STOP or clicking the
              unsubscribe link (where available) in one of our messages. View
              our <Link href="/privacy">Privacy Policies</Link> and{" "}
              <Link href="/terms">Terms & Conditions</Link>.
            </ConsentText>
          </SignUpSection>
        </MainContent>

        <BottomBar>
          <SocialLinks>
            <Link href="/instagram" aria-label="Instagram">
              <Instagram />
            </Link>
            {/* <Link href="/youtube" aria-label="YouTube">
              <Youtube />
            </Link> */}

            {/* <a
              href="https://www.youtube.com/@TheNotProject"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube />
            </a> */}
          </SocialLinks>
          <LegalLinks>
            <Link href="/privacy">Privacy Policies</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </LegalLinks>
          <Copyright>The Not Project 2025</Copyright>
        </BottomBar>
      </Foot3r>
    </FooterContainer>
  );
}
