import { Atma, Lexend, Plus_Jakarta_Sans } from 'next/font/google';

export const lexend = Lexend({ weight: ['500'], subsets: ['latin'] });

export const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '300', '600', '700'],
  subsets: ['latin'],
});

export const atma = Atma({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
