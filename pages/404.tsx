import Head from 'next/head';
import React from "react";
import { NotFoundContainer } from 'components/Layout_parts';
import Layout from 'components/Layout';

export default function NotFound() {
  return(
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITETITLE} - 404</title>
      </Head>
      <Layout>
        <NotFoundContainer/>
      </Layout>
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {}
  }
}