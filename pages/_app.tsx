import React from "react"
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/global.scss';
import Layout from 'components/Layout';
import Skeleton from "react-loading-skeleton";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return(
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>);
};

export default App