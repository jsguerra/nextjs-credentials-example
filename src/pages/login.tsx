import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  return (
    <main style={{ maxWidth: "960px", margin: "auto" }}>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user?.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </main>
  );
};

export default Login;
