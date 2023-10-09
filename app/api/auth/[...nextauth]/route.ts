import connectMongo from "../../../../lib/mongo";
import User from "../../../../models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials: any) {
                const { username, password } = credentials;
                try {
                  await connectMongo();
                  const user = await User.findOne({ username });
                  

                  if (!user) {
                      return null;
                  }

                  const passwordsMatch = await bcrypt.compare(password, user.password);

                  if (!passwordsMatch) {
                      return null;
                  }
                  
                  return {
                    name: user
                  };
                } catch (error) {
                  console.log("Error: ", error);
                }
            },
        }),
    ],
  session: {
    strategy: "jwt",

  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/accounts/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };