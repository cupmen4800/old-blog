import Head from 'next/head'
import Articles_styles from 'styles/ArticleList.module.scss';
import styles from 'styles/Home.module.scss';
import React, { useState } from 'react';
import { Article } from 'components/Layout_parts'
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, Configure, Pagination, PoweredBy } from 'react-instantsearch-dom';
import { Hit } from 'react-instantsearch-core';
import { SearchhitComponent } from "components/Layout_parts";
import header_styles from 'styles/Header.module.scss';

const searchClient = algoliasearch('AG783LQQY3', '73d4d320e08b008e617f4e1ef1734ae5');
const searchIndex = "blogs";

const About = () => {
  return (
    <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_SITETITLE} - About</title>
    </Head>
    <div className={`${Articles_styles.article_list}`}>
      <input className={Articles_styles.category_tag} type="file" name="file" />
    </div>
    </>
  )
}

export const getStaticProps = () => {
  // SSG
  return {
    props: {}
  }
};

export default About