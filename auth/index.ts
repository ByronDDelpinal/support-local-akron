import { isPathProtected } from './paths';
import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const KEY_CREDENTIALS_SIGN_IN_ERROR = 'CredentialsSignin';
export const KEY_CREDENTIALS_SIGN_IN_ERROR_URL =
  'https://errors.authjs.dev#credentialssignin';
export const KEY_CALLBACK_URL = 'callbackUrl';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
      name: 'Admin login',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          process.env.ADMIN_USER === credentials?.username &&
          process.env.ADMIN_PASSWORD === credentials?.password
        ) {
          const user: User = { id: '1', name: 'Admin User' };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;

      const isUrlProtected = isPathProtected(pathname);
      const isUserLoggedIn = !!auth?.user;
      const isRequestAuthorized = !isUrlProtected || isUserLoggedIn;

      return isRequestAuthorized;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: 'f9xQy49mlTC61AmViBJt2KGr+asqM5yljAkSnM21/J4=',
});

export const safelyRunAdminServerAction = async <T>(
  callback: () => T
): Promise<T> => {
  const session = await auth();
  if (session?.user) {
    return callback();
  } else {
    throw new Error('Unauthorized server action request');
  }
};

export const generateAuthSecret = () =>
  fetch('https://generate-secret.vercel.app/32', { cache: 'no-cache' }).then(
    (res) => res.text()
  );
