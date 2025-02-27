"use client";

import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

import { FooterContainer } from "./footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="mainContent">
          <div className="logoSection">
            <h3>Logo</h3>
          </div>
          <div className="navSection">
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
          </div>

          <div className="supportSection">
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
          </div>

          <div className="signupSection">
            <h2>Never Miss Out</h2>
            <form className="signupForm">
              <p>Be the first to know about our new stories</p>
              <div className="signup">
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <button type="submit">SIGN UP</button>
              </div>
            </form>
            <p className="consentText">
              By entering your phone number and submitting this form, you
              consent to receive marketing text messages from The Not Project at
              the number provided, including messages sent by auto dialer.
              Message and data rates may apply. Message frequency varies. You
              can unsubscribe at any time by replying STOP or clicking the
              unsubscribe link (where available) in one of our messages. View
              our <Link href="/privacy">Privacy Policies</Link> and{" "}
              <Link href="/terms">Terms & Conditions</Link>.
            </p>
          </div>
        </div>
        <div className="bottomBar">
          <div className="socialLinks">
            <Link href="/instagram" aria-label="Instagram">
              <Instagram />
            </Link>
            <Link href="/youtube" aria-label="YouTube">
              <Youtube />
            </Link>
          </div>
          <div className="legalLinks">
            <Link href="/privacy">Privacy Policies</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
          <div className="copyright">The Not Project 2025</div>
        </div>
      </div>
    </FooterContainer>
  );
}