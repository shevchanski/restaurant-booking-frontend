import { DEFAULT_LOGIN_REDIRECT, authRoutes, publicRoutes } from '@/routes';
import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
    signOut: '/',
  },
  callbacks: {
    authorized({ auth, request }) {
      const {
        nextUrl: { pathname },
      } = request;

      const isLoggedIn = !!auth?.user;

      const isAuthRoute = authRoutes.includes(pathname);
      const isPublicRoute = publicRoutes.includes(pathname);

      if (isPublicRoute) {
        return true;
      } else if (isAuthRoute) {
        if (isLoggedIn) {
          return Response.redirect(
            new URL(DEFAULT_LOGIN_REDIRECT, request.url),
          );
        }
        return false;
      } else if (isLoggedIn) {
        return true;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
