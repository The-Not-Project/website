import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Oswald } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from '@auth0/nextjs-auth0';
import { createUser, getUser } from './database/repositories/user.repository';
import './globals.css';

export const metadata = {
  title: 'The Not Project',
  description: 'Unbridled Stories, Untamed Voices. Human-centered stories from NYC: blogs, interviews, films, and more.',
  keywords: ['The Not Project', 'NYC storytelling', 'independent journalism', 'community voices', 'documentary', 'true stories'],
  authors: [{ name: 'Tariq El Ghayate' }],
  creator: 'The Not Project',
  metadataBase: new URL('https://www.thenotproject.com'),
  openGraph: {
    title: 'The Not Project',
    description: 'Explore meaningful stories from New York City, told without constraint or commercial pressure.',
    url: 'https://www.thenotproject.com',
    siteName: 'The Not Project',
    images: [
      {
        url: '/media/LoAndDavid.png',
        width: 1200,
        height: 630,
        alt: 'The Not Project Cover Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Not Project',
    description: 'NYC stories with soul. Told raw and unfiltered.',
    images: ['/media/LoAndDavid.png'],
  },
};


const oswald = Oswald({ weight: '400', subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (session) {
    const user = await getUser(session.user.sub);
    if (!user) {
      const formData = new FormData();
      formData.append('id', session.user.sub);
      formData.append('email', session.user.email);
      await createUser(formData);
    }
  }

  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={oswald.className}>
        <UserProvider>
          {children}
          <Analytics />
          </UserProvider>
      </body>
    </html>
  );
}
