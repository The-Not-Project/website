import { Metadata } from "next";
import { contactPageMetadata } from "@/static/metadata/metadata";
import ContactForm from "./components/form/form.component";
import ContactHeader from "./components/header/header.component";
import SocialsSection from "./components/socials/socials.component";

export const metadata: Metadata = contactPageMetadata;

export default function ContactPage() {
  return (
    <main>
      <ContactHeader />
      <ContactForm />
      <SocialsSection />
    </main>
  );
}
