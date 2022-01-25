import { AuthInterface } from "types/index";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";
import backendApi from "../api/backendApi";

const Auth = ({
  role,
  authenticatedRedirect,
  ScreenLoader,
  children,
}: AuthInterface) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return null; // Do nothing while loading
    if (!isUser && !authenticatedRedirect) signIn(); // If not authenticated, force log in
  }, [isUser, status, authenticatedRedirect]);

  if (isUser) {
    if (!!authenticatedRedirect) {
      return window.location.replace(authenticatedRedirect);
    }

    if (!!role && role !== session.user.role) {
      return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
          <div>Access denied for {session.user.role}</div>
          <div>
            <button
              className="px-4 py-2 bg-primary rounded-md text-white mx-2"
              onClick={() => {
                router.back();
              }}
            >
              Back
            </button>
            <button
              className="px-4 py-2 bg-primary rounded-md text-white mx-2"
              onClick={() => {
                signOut();
              }}
            >
              Sign
            </button>
          </div>
        </div>
      );
    }

    return children;
  } else if (!!authenticatedRedirect) {
    return children;
  }

  return ScreenLoader || null;
};

export default Auth;
