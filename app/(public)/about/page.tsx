import seoKeywords from "@/app/constants/seoKeywords";
import About from "./aboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Not Project",
  description:
    "Learn more about the people and purpose behind The Not Project.",
  openGraph: {
    title: "About | The Not Project",
    description:
      "Learn more about the people and purpose behind The Not Project.",
    url: "https://www.thenotproject.com/about",
    type: "website",
    images: [
      {
        url: "/media/LoAndDavid.png",
        width: 1200,
        height: 630,
        alt: "The Not Project About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | The Not Project",
    description:
      "Learn more about the people and purpose behind The Not Project.",
    images: ["/media/LoAndDavid.png"],
  },
  keywords: seoKeywords.about,
};

export default function Page() {
  return <About />;
}
