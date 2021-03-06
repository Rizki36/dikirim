import { useAppDispatch, useAppSelector } from "@/configs/redux/hooks";
import { logout, setUser } from "@/configs/redux/userSlice";
import Router from "next/router";
import backendApi from "@/configs/api/backendApi";
import { AxiosError } from "axios";
import React, { useCallback, useEffect } from "react";
import { AuthOptions } from "../types";

interface Props extends AuthOptions {
  children: any;
}

const Auth = (props: Props) => {
  const {
    redirectAuthenticated = "/",
    mustLoggedIn = true,
    redirectUnAuthenticated = "/login",
    children,
  } = props;

  const user = useAppSelector((state) => state.user.account);
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    Router.replace(redirectUnAuthenticated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectUnAuthenticated]);

  useEffect(() => {
    backendApi
      .get<{ data: any }>("/account")
      .then((res) => {
        dispatch(setUser(res.data.data));
      })
      .catch((e: AxiosError) => {
        if (e.response.status === 401) handleLogout();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // redirect when user is authenticated
    if (!mustLoggedIn && user) Router.replace(redirectAuthenticated);

    // redirect when user is unauthenticated and page is not login page
    if (!user && Router.pathname !== redirectUnAuthenticated) handleLogout();
  }, [
    user,
    handleLogout,
    mustLoggedIn,
    redirectAuthenticated,
    redirectUnAuthenticated,
  ]);

  // loading
  if (!user && mustLoggedIn) return <></>;

  return children;
};

export default Auth;
