"use client";

import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/app/zustand/store";
import { usePublicServerActions } from "@/app/contexts/public-server-actions";
import Swal from "sweetalert2";

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
} from "./footer.styles";
import clsx from "clsx";

export default function FooterComponent() {
  const { createSubscriber } = usePublicServerActions();
  const isMenuOpen = useStore((state) => state.mobileLayout.isMenuOpen);
  const isMobile = useStore((state) => state.mobileLayout.isMobile);

  type SignUpFormFields = {
    email: { value: string };
    phone: { value: string };
  };

  async function handleSignUp(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement & SignUpFormFields;
    const email: string = form.email.value;
    // const phone: string = form.phone.value;

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address.",
        confirmButtonText: "close",
        customClass: {
          confirmButton: "neutral-button",
        },
        buttonsStyling: false,
      });
      return;
    }

    const response = await createSubscriber(email);

    if (response === "Email already subscribed") {
      Swal.fire({
        icon: "info",
        title: "Already Subscribed",
        text: "This email is already subscribed to our updates.",
        confirmButtonText: "close",

        customClass: {
          confirmButton: "neutral-button",
        },
        buttonsStyling: false,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Thanks for subscribing!",
      text: "You have successfully signed up for updates.",
      confirmButtonText: "close",
      customClass: {
        confirmButton: "neutral-button",
      },
      buttonsStyling: false,
    });

    form.reset();
  }

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
              <Link href="/about">FAQ</Link>
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
          <SignUpForm onSubmit={(e) => handleSignUp(e)}>
            <p>Be the first to know about our new stories.</p>
            <SignUp>
              <input type="email" name="email" placeholder="Email address" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number (optional)"
              />
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
        {isMobile ? (
          <>
            <LegalLinks>
              <Link href="/privacy">Privacy Policies</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </LegalLinks>
            <p>© The Not Project</p>
          </>
        ) : (
          <>
            <p>© The Not Project</p>
            <LegalLinks>
              <Link href="/privacy">Privacy Policies</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </LegalLinks>
            <p>2025</p>
          </>
        )}
      </BottomBar>
    </Footer>
  );
}
