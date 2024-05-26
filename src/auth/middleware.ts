import NextAuth from 'next-auth';
import { authConfig } from './authConfig';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/profile'],
};
