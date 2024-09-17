import { PrismaAdapter } from "@auth/prisma-adapter";
import type { UserRole } from '@prisma/client';
import {
  type DefaultUser,
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import CredentialsProvider from 'next-auth/providers/credentials';
import { env } from "~/env";
import { prisma } from "~/server/db";
import { compare } from "bcrypt"

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      role: UserRole;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    // ...other properties
    role: UserRole;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: env.SESSION_MAX_AGE,
  },
  callbacks: {
    session: async ({ session, token, trigger }) => {
      const payload = {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        },
      };

      if (trigger === "update") {
        const profile = await prisma.profile.findUnique({
          where: {
            userId: session.user.id,
          },
        });

        payload.user.name = profile?.name ? profile?.name : "";
      }

      return payload;
    },
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  cookies: {
    sessionToken: {
      name:
        env.NODE_ENV === "development"
          ? "next-auth.session-token"
          : "__Secure-next-auth.session-token",
      options: {
        domain:
          env.NODE_ENV === "development"
            ? "localhost"
            : env.SESSION_COOKIE_DOMAIN,
        httpOnly: true,
        maxAge: env.SESSION_MAX_AGE,
        path: "/",
        secure: true,
      },
    },
  },
  providers: [
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
    CredentialsProvider({
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        nim: {
          label: "NIM",
          type: "text",
          placeholder: "13520065",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        // You can also use the `req` object to access additional parameters
        // return { id: 1, name: "J Smith", email: "jsmith@example" };
        if (!credentials) {
          throw new Error("Credentials not provided");
        }

        const { nim, password } = credentials;
        if (!nim || !password) {
          throw new Error("NIM or password not provided");
        }
        const user = await prisma.user.findUnique({
          where: {
            nim,
          },
        });
        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await compare(password, user.passwordHash);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        const profile = await prisma.profile.findUnique({
          where: {
            userId: user.id,
          },
        });

        return {
          id: user.id,
          role: user.role,
          name: profile?.name ? profile?.name : "",
        };
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
