import Head from 'next/head';
import React from "react";
import { NextPage } from 'next'
import { Others_list } from 'components/Layout_parts';
import Layout from 'components/Layout';
import styles from 'styles/Home.module.scss';
import Articles_styles from '/styles/ArticleList.module.scss';

const All = () => {
  return(
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITETITLE} - All</title>
      </Head>
      <Others_list/>
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {}
  }
}

export default All;