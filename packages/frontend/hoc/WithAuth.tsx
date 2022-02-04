import backendApi from "@/configs/api/backendApi";
import { AxiosError } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Router from "next/router";
import { useAppDispatch, useAppSelector } from "@/configs/redux/hooks";
import { logout, setUser } from "@/configs/redux/userSlice";

const WithAuth = (
  Component,
  {
    mustLoggedIn = true,
    redirectUnAuthenticated = "/test",
    redirectAuthenticated = "/secure",
  }
) => {
  const AuthenticatedComponent = (props) => {
    const user = useAppSelector((state) => state.user.account);
    const dispatch = useAppDispatch();

    const handleLogout = useCallback(() => {
      dispatch(logout());
      Router.replace(redirectUnAuthenticated);
    }, [dispatch]);

    useEffect(() => {
      backendApi
        .get<{ data: any }>("/account")
        .then((res) => {
          dispatch(setUser(res.data.data));
        })
        .catch((e: AxiosError) => {
          if (e.response.status === 401) handleLogout();
        });
    }, []);

    useEffect(() => {
      // redirect when user is authenticated
      if (!mustLoggedIn && user) Router.replace(redirectAuthenticated);

      // redirect when user is unauthenticated and page is not login page
      if (!user && Router.pathname !== redirectUnAuthenticated) handleLogout();
    }, [user, handleLogout]);

    // loading
    if (!user && mustLoggedIn) return <></>;

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default WithAuth;
