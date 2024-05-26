import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
    signOut: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProfilePage = nextUrl.pathname.startsWith('/profile');

      // if (isProfilePage) {
      //   if (isLoggedIn) {
      //     return true;
      //   }
      //   return false;
      // } else if (isLoggedIn) {
      //   return true;
      // }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
