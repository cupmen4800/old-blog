import Head from 'next/head';
import React from "react";
import { NextPage } from 'next'
import { Others_list } from 'components/Layout_parts';
import styles from 'styles/Home.module.scss';
import Articles_styles from '/styles/ArticleList.module.scss';
import Layout from 'components/Layout';

const All = () => {
  return(
    <>
      <Head>
      <title>{process.env.NEXT_PUBLIC_SITETITLE} - All</title>
      <meta name="keywords" content={process.env.NEXT_PUBLIC_INDEXKEYWORD}/>
      <meta name="description" content={process.env.NEXT_PUBLIC_INDEXDESCRIPTION}/>
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITEDOMAIN}/all`} />
      <meta property="og:type" content={process.env.NEXT_PUBLIC_INDEXTYPE}/>
      <meta property="og:title" content={`${process.env.NEXT_PUBLIC_SITETITLE} - All`}/>
      <meta property="og:description" content={process.env.NEXT_PUBLIC_INDEXDESCRIPTION}/>
      </Head>
      <Layout>
        <Others_list/>
      </Layout>
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {}
  }
}

export default All;