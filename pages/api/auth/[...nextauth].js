import bcryptjs from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import db from "../../../utils/db";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await db.connect();
          const user = await User.findOne({ email: credentials.email });
          await db.disconnect();
          if (
            user &&
            bcryptjs.compareSync(credentials.password, user.password)
          ) {
            return {
              _id: user._id,
              name: user.name,
              email: user.email,
              image: "f",
              isAdmin: user.isAdmin,
            };
          } else {
            throw new Error("Invalid email or password");
          }
        } catch (error) {
          throw new Error("An error occurred during authentication");
        }
      },
    }),
  ],
});
