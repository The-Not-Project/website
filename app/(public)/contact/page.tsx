import seoKeywords from "@/app/constants/seoKeywords";
import ContactPage from "./contactPage";

export const metadata = {
  title: "Contact | The Not Project",
  description: "Get in touch with The Not Project team for collaborations, feedback, or inquiries.",
  openGraph: {
    title: "Contact | The Not Project",
    description: "Get in touch with The Not Project team for collaborations, feedback, or inquiries.",
    url: "https://www.thenotproject.com/contact",
    type: "website",
    images: [
      {
        url: "/media/LoAndDavid.png",
        width: 1200,
        height: 630,
        alt: "The Not Project Contact",
      },
    ],
  },  
  twitter: {
    card: "summary_large_image",
    title: "Contact | The Not Project",
    description: "Get in touch with The Not Project team for collaborations, feedback, or inquiries.",
    images: ["/media/LoAndDavid.png"],
  },
  keywords: seoKeywords.contact,
};

export default function Page() {
  return <ContactPage />
}
