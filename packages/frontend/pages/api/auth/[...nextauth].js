import axios from "axios";
import { DateTime } from "luxon";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const data = await axios
            .get("https://reqres.in/api/users/7")
            .then((res) => res.data.data);

          const user = {
            name: data.first_name,
            image: data.avatar,
            role: "reseller",
            access_token: "lbvthfgjhvbvtuyryxcfvughkgvcyxrdycfgyuhbvfr",
            expires: 3600,
          };

          

          if (user) {
            return user;
          }

          return null;
        } catch (error) {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  jwt: {
    encryption: true,
    secret: process.env.SECRET,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider !== "credentials") {
        user.access_token = account.access_token;
        user.expires = account.expires_at;
        user.role = "reseller";
      }

      return user;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        const { access_token, role, expires } = user;

        token = {
          ...token,
          access_token,
          role,
          expires,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        const { access_token, role, expires } = token;
        session = {
          ...session,
          expires: DateTime.local().plus(expires).toUTC().toString(),
          access_token,
          user: { ...session.user, role },
        };
      }
      return session;
    },
  },
  debug: false,
});
