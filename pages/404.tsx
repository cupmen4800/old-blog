import Head from 'next/head';
import React from "react";
import { NotFoundContainer } from '/components/Layout_parts';

export default function NotFound() {
  return(
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITETITLE} - 404</title>
      </Head>
      <NotFoundContainer/>
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {}
  }
}