import Head from 'next/head'
import {postDataResult, PropsAllPostsData, postData, fileNameId } from 'interfaces'
import {NextPage} from 'next'
import Articles_styles from 'styles/ArticleList.module.scss';
import styles from 'styles/Home.module.scss';
import React, { useState } from 'react';
import { Article } from 'components/Layout_parts'
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, Configure, Pagination, PoweredBy } from 'react-instantsearch-dom';
import { Hit } from 'react-instantsearch-core';
import { SearchhitComponent } from "components/Layout_parts";
import header_styles from 'styles/Header.module.scss';
import Layout from 'components/Layout';

const searchClient = algoliasearch('AG783LQQY3', '73d4d320e08b008e617f4e1ef1734ae5');
const searchIndex = "blogs";

const SearchHome = () => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITETITLE} - Search</title>
      </Head>
      <Layout>
        <div className={`${Articles_styles.article_list}`}>
          <h2 className={Articles_styles.home_h2}>Search</h2>
          {/* ここに色々書く */}
          <InstantSearch indexName={searchIndex} searchClient={searchClient}>
            <SearchBox/>
            <PoweredBy />
            <div className={`${header_styles.search_list}`}>
              <Configure hitsPerPage={5} />
              <Hits hitComponent={SearchhitComponent} />
              <Pagination />
            </div>
          </InstantSearch>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = () => {
  // SSG
  return {
    props: {}
  }
};

export default SearchHome