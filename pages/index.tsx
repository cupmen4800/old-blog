import Head from 'next/head'
import { getSortedPostsData } from 'lib/posts'
import {postDataResult, PropsAllPostsData, postData, fileNameId } from 'interfaces'
import {NextPage} from 'next'
import Articles_styles from 'styles/ArticleList.module.scss';
import ReactPaginate from 'react-paginate';
import React, { useState } from 'react';
import { Article } from 'components/Layout_parts'
import algoliasearch from 'algoliasearch';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from 'components/Layout';
import Link from 'next/link'
const postsDirectory= path.join(process.cwd(), '/posts')

const Home:NextPage<{allPostsData: Array<postDataResult>}> = ({allPostsData}: {allPostsData: Array<postDataResult>}) => {
  const [ offset, setOffset ] = useState(0); // Number Item View
  const perPage: number = 10; // 1Page Items
  // Click function
  const handlePageChange = (data: any) => {
      let page_number = data['selected']; // クリックした部分のページ数が{selected: 2}のような形で返ってくる
      setOffset(page_number*perPage); // offsetを変更し、表示開始するアイテムの番号を変更
  }

  const HTMLHead =
  <Head>
    <title>{process.env.NEXT_PUBLIC_SITETITLE}</title>
    <meta name="keywords" content={process.env.NEXT_PUBLIC_INDEXKEYWORD}/>
    <meta name="description" content={process.env.NEXT_PUBLIC_INDEXDESCRIPTION}/>
    <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITEDOMAIN}`} />
    <meta property="og:type" content={process.env.NEXT_PUBLIC_INDEXTYPE}/>
    <meta property="og:title" content={`${process.env.NEXT_PUBLIC_SITETITLE}`}/>
    <meta property="og:description" content={process.env.NEXT_PUBLIC_INDEXDESCRIPTION}/>
  </Head>

  // 記事位リスト
  const ArticleList = 
  <div className={`${Articles_styles.article_list}`}>
    <h2 className={Articles_styles.home_h2}>Home</h2>
    {allPostsData.slice(offset, offset + perPage).map(({ id, data }) => (
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
    ))}
  </div>

  return (
    <>
    {HTMLHead}
    <Layout>
      {ArticleList}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(allPostsData.length/perPage)} // 全部のページ数。端数の場合も考えて切り上げに。
        marginPagesDisplayed={2} // 一番最初と最後を基準にして、そこからいくつページ数を表示するか
        pageRangeDisplayed={5} // アクティブなページを基準にして、そこからいくつページ数を表示するか
        onPageChange={handlePageChange} // function
        containerClassName={`${Articles_styles.pagelink_div}`} // ul
        pageLinkClassName={`${Articles_styles.pagelink}`} // Default li a
        activeLinkClassName={`${Articles_styles.active_pagelink}`} // Active li
        previousLinkClassName={`${Articles_styles.pagelink}`} // [<] li
        nextLinkClassName={`${Articles_styles.pagelink}`} // [>] li
        disabledLinkClassName={`${Articles_styles.notfound_pagelink}`} // notfound [<,>] li
      />
    </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const fileNames = fs.readdirSync(postsDirectory)
  const PostsData = fileNames.map(fileName => {
      const id = fileName.replace(/\.md$/, '')
      const objectID = id;

      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const matterResult = matter(fileContents)
      return {
          id,
          objectID,
          ...matterResult
      }
  })
  const allPostsData = getSortedPostsData()
  const searchClient = algoliasearch('AG783LQQY3', '73d4d320e08b008e617f4e1ef1734ae5');
  const searchIndex = searchClient.initIndex('blogs');
  if (process.env.NODE_ENV === 'production') {
    await searchIndex.saveObjects(PostsData, { autoGenerateObjectIDIfNotExist: false });
  }
  // SSG
  return {
    props: {
      allPostsData
    }
  }
};

export default Home