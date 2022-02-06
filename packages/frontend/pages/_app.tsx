import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store, { persistor } from "@/configs/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import React from "react";
import { SWRConfig } from "swr";
import type { AppProps } from 'next/app'
import {  Page } from "../types";
import ResellerLayout from "@/components/layouts/ResellerLayout";
import Auth from "@/components/Auth";


type Props = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: Props) {

  // default layout
  const Layout = Component.layout ?? ResellerLayout

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SWRConfig>
            <Head>
              <title>Dikirim ❤️</title>
            </Head>
            <Layout>
              <Auth {...Component.auth}>
                <Component {...pageProps} />
              </Auth>
            </Layout>
          </SWRConfig>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
