import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

import Credentials from 'next-auth/providers/credentials';


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            if (
                credentials.username === process.env.ADMIN_USERNAME &&
                credentials.password === process.env.ADMIN_PASSWORD
            ) {
                const user = { id: 'admin', name: 'Admin' }
                return user;
            }
            return null;
        }

    })],
})