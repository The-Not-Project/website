import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit as Font } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import seoKeywords from "./constants/seoKeywords";
import "./globals.scss";
// import "./tailwind.css";
import "./styles/_keyframe-animations.scss";
import "./styles/_variables.scss";
import AuthSyncer from "./(public)/components/auth/AuthSyncer";

export const metadata: Metadata = {
  title: "The Not Project",
  description:
    "Unbridled Stories, Untamed Voices. Human-centered stories from NYC: blogs, interviews, films, and more.",
  authors: [{ name: "Tariq El Ghayate" }],
  creator: "The Not Project",
  metadataBase: new URL("https://www.thenotproject.com"),
  openGraph: {
    title: "The Not Project",
    description:
      "Explore meaningful stories from New York City, told without constraint or commercial pressure.",
    url: "https://www.thenotproject.com",
    siteName: "The Not Project",
    images: [
      {
        url: "/media/LoAndDavid.png",
        width: 1200,
        height: 630,
        alt: "The Not Project Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Not Project",
    description: "NYC stories with soul. Told raw and unfiltered.",
    images: ["/media/LoAndDavid.png"],
  },
  keywords: seoKeywords.home,
};

const oswald = Font({ weight: "400", subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1c1c1c" />
      </head>
      <body className={oswald.className}>
        <UserProvider>
          <AuthSyncer />
          {children}
          <Analytics />
        </UserProvider>
      </body>
    </html>
  );
}
