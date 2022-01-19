import Head from 'next/head';
import React from "react";
import { NotFoundContainer } from '../components/Layout_parts';
import styles from '/styles/Home.module.scss';
import Articles_styles from '/styles/ArticleList.module.scss';

export default function NotFound() {
  return(
    <>
      <Head>
        <title>SAMPLE</title>
      </Head>
      <progress></progress>
    </>
  )
}