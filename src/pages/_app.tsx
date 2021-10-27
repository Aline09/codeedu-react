import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import Theme from "../theme";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </Provider>
    </>
  );
}
export default MyApp;
