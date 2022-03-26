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
import { Article } from 'components/Layout_parts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPaintBrush, faSearch, faKeyboard, faQuestion, faUser, faImage, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faTwitter, faInstagram, faPython, faNodeJs, faReact, faAws, faGithub } from '@fortawesome/free-brands-svg-icons'

const Home:NextPage<{allPostsData: Array<postDataResult>}> = ({allPostsData}: {allPostsData: Array<postDataResult>}) => {
  const [ offset, setOffset ] = useState(0); // 何番目のアイテムから表示するか
    const perPage: number = 10; // 1ページあたりに表示したいアイテムの数
    // クリック時のfunction
    const handlePageChange = (data: any) => {
        let page_number = data['selected']; // クリックした部分のページ数が{selected: 2}のような形で返ってくる
        setOffset(page_number*perPage); // offsetを変更し、表示開始するアイテムの番号を変更
    }
  const filter = allPostsData.filter(x => x.data.janle === "programming")
  const filter_Article = filter.slice(offset, offset + perPage).map(({ id, data }) => (
    <a href={`/article/${id}`} className={Articles_styles.article} key={data.date}>
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
  ))
  return (
    <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_SITETITLE} - プログラミング</title>
    </Head>
    <div className={`${Articles_styles.article_list}`}>
      <h2 className={Articles_styles.home_h2}>プログラミング</h2>
      {filter_Article}
    </div>
    <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={Math.ceil(filter.length/perPage)} // 全部のページ数。端数の場合も考えて切り上げに。
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
    </>
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