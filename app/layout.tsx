import type { Metadata } from 'next';
import { Geist, Geist_Mono, Oswald } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from '@auth0/nextjs-auth0';
import { createUser, getUser } from './script';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Not Project',
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
      <body className={oswald.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
