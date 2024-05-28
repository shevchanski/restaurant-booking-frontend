import type { Metadata } from 'next';

import { jakarta } from '@/constants/fonts';
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
    <html lang="en">
      <body
        className={`${jakarta.className} flex min-h-screen flex-col bg-white text-black`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
