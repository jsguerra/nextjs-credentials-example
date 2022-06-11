import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const PrivatePage = () => {
  const { data: session } = useSession();

  return (
    <>
      <div style={{ maxWidth: "960px", margin: "auto" }}>
        <h1>Private Page</h1>
        <div>
          {session ? (
            <>
              <p>Private Content</p>
              <p>
                <button onClick={() => signOut()}>Sign Out</button>
              </p>
            </>
          ) : (
            <>
              <p>You are not permitted to see this page.</p>
              <p>
                <button onClick={() => signIn()}>Sign in</button>
              </p>
            </>
          )}
          <p>
            <Link href="/">
              <a>Return Home</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivatePage;
