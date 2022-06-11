import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  return (
    <main >
      <h1 >
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
      <div>
        <Link href="/private">
          <a>Go to private page</a>
        </Link>
      </div>
    </main>
  );
};

export default Login;
