import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store, { persistor } from "@/configs/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { SessionProvider } from "next-auth/react";
import React from "react";
import Auth from "@/configs/routes/Auth";
import useSWR, { SWRConfig } from "swr";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SWRConfig>
            <SessionProvider session={session}>
              <Head>
                <title>Dikirim ❤️</title>
              </Head>
              {Component.auth ? (
                <Auth {...Component.auth}>
                  <Component {...pageProps} />
                </Auth>
              ) : (
                <Component {...pageProps} />
              )}
            </SessionProvider>
          </SWRConfig>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
