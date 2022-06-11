import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // General structure
  // providers: [],
  // callbacks: {},
  // secret: "",
  // jwt: {},
  // pages: {}

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: (credentials) => {
        // database look up
        if (credentials?.username === "admin" && credentials?.password === "password") {
          return {
            id: 1,
            name: "admin"
          }
        }

        // login failed
        return null;
      }
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    }
  },
  secret: "wWhK//wsakupdu9h7bp0WYCutRfcIfEFC9iJHO4LYGE=",
  jwt: {
    secret: "wWhK//wsakupdu9h7bp0WYCutRfcIfEFC9iJHO4LYGE=",
  },
  pages: {
    signIn: "/signIn",
  },
});
