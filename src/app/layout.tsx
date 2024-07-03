import type { Metadata, Viewport } from 'next';

import { jakarta } from '@/constants/fonts';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: 'TableBar',
  description: 'Find your restaurant in one touch',
  icons: '/favicon.ico',
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
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
          className={`${jakarta.className} relative flex min-h-screen flex-col overflow-x-hidden bg-white text-black`}
        >
          {/* <Header /> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
