import { PasswordRegex } from '@/constants/const';
import { authenticateUser } from '@/utils/authenticateUser';
import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './authConfig';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    credentials({
      async authorize(credentials) {
        const { success, data } = z
          .object({
            password: z.string().regex(PasswordRegex),
            email: z.string().email().toLowerCase(),
          })
          .safeParse(credentials);

        if (success) {
          const user = await authenticateUser(data);

          return user;
        }
        return null;
      },
    }),
  ],
});
