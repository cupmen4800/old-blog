import Head from 'next/head';
import React from "react";
import { GetStaticProps } from 'next'
import { Others_list } from 'components/Layout_parts';
import Layout from 'components/Layout';
import styles from 'styles/Home.module.scss';
import Articles_styles from '/styles/ArticleList.module.scss';

export default function All() {
  return(
    <>
      <Head>
        <title>SAMPLE</title>
      </Head>
        <Others_list/>
    </>
  )
}

export const getStaticProps:GetStaticProps = async() => {
  return {
    props: {}
  }
}