import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getSortedPostsData } from 'lib/posts'
import {postDataResult, PropsAllPostsData} from 'interfaces'
import {NextPage} from 'next'
import Articles_styles from 'styles/ArticleList.module.scss';
import Pages_styles from 'styles/Page_Link.module.scss';
import styles from 'styles/Home.module.scss';
import ReactPaginate from 'react-paginate';
import React, { useState } from 'react';
import { Article, FilList } from 'components/Layout_parts'
import Layout from 'components/Layout';

const Home:NextPage<{allPostsData: Array<postDataResult>}> = ({allPostsData}: {allPostsData: Array<postDataResult>}) => {
  const [ offset, setOffset ] = useState(0); // 何番目のアイテムから表示するか
    const perPage: number = 10; // 1ページあたりに表示したいアイテムの数
    // クリック時のfunction
    const handlePageChange = (data: any) => {
        let page_number = data['selected']; // クリックした部分のページ数が{selected: 2}のような形で返ってくる
        setOffset(page_number*perPage); // offsetを変更し、表示開始するアイテムの番号を変更
    }
  const filter = allPostsData.filter(x => x.data.janle === "seo")
  const filter_Article = filter.slice(offset, offset + perPage).map(({ id, data }) => (
    <Link href={`/article/${id}`} key={data.date}>
      <a className={Articles_styles.article}>
        <Article
          title={data.title}
          janle={data.janle}
          category={data.category}
          view_janle={data.view_janle}
          view_category={data.view_category}
          date={data.date}
          detail={data.detail}
        />
      </a>
    </Link>
  ))
  return (
    <Layout>
      <FilList 
        janle="SEO"
        url="seo"
        filter_Article={filter_Article}
        filter_length={filter.length}
        perPage={perPage}
        handlePageChange={handlePageChange}
      />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home