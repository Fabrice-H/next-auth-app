import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("====================================");
      console.log(account, profile);
      console.log("====================================");
      const data = {
        firstname: profile.given_name,
        lastname: profile.family_name,
        email: profile?.email,
        typeConnexion: account.provider === "google" ? "google" : "facebook",
      };

      return true;
    },
    async jwt({ token, user, account }) {
      if (account) {
        token.loggedUser = user?.email;
      }
      return token;
    },
    async session({ user, account, session }) {
      if (!session) return;

      return session;
    },
  },
};

export default NextAuth(authOptions);
