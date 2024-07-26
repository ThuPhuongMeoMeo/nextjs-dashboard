import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      const isLoggedIn = !!url?.startsWith('/dashboard');

      if (isLoggedIn && !url.startsWith('/dashboard')) {
        return `${baseUrl}/dashboard`;
      }
      
      if (!isLoggedIn && url.startsWith('/dashboard')) {
        return `${baseUrl}/login`;
      }

      return url;
    },
  },
  providers: [], 
} satisfies NextAuthOptions;
