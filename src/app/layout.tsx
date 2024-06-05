import type { Metadata } from 'next';

import { jakarta } from '@/constants/fonts';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: 'TableBar',
  description: 'Find your restaurant in one touch',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${jakarta.className} relative flex min-h-screen flex-col bg-white text-black`}
        >
          {/* <Header /> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
