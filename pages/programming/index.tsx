import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getSortedPostsData } from 'lib/posts'
import {postDataResult, PropsAllPostsData} from 'interfaces'
import {NextPage} from 'next'
import Articles_styles from 'styles/ArticleList.module.scss';
import Pages_styles from 'styles/Page_Link.module.scss';
import styles from 'styles/Home.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPaintBrush, faSearch, faKeyboard, faQuestion, faUser, faImage, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faTwitter, faInstagram, faPython, faNodeJs, faReact, faAws, faGithub } from '@fortawesome/free-brands-svg-icons'

const Home:NextPage<{allPostsData: Array<postDataResult>}> = ({allPostsData}: {allPostsData: Array<postDataResult>}) => {
  const filter = allPostsData.filter(x => x.data.janle === "programming")
  const Python_Article = filter.map(({ id, data }) => (
    <>
      <Link href={`/article/${id}`}><a className={Articles_styles.article} key={data.date}>
        <object type="image/svg+xml" data={`/storage/img/janle-icon/${data.category}.svg`} className={`${Articles_styles.article_icon}`}/>
        <div><h1 className={styles.source_han_sans_bold}>{ data.title }</h1>
          <p className={styles.source_han_sans_light}>投稿日： {data.date}</p>
          <div className={`${Articles_styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
            <Link href={`/${data.janle}`}><a className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>{ data.view_janle }</a></Link>
            <Link href={`/${data.janle}/${data.category}`}><a className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>{ data.view_category }</a></Link>
          </div>
          <p className={styles.source_han_sans_light}>{ data.detail }</p>
        </div>
      </a></Link>
    </>
    ))
  return (
    <>
    <Head>
      <title>LOGO</title>
    </Head>
    <div className={`${Articles_styles.article_list}`}>
      <h2 className={Articles_styles.home_h2}>プログラミング</h2>
      {Python_Article}
    </div>
    </>
  )
}

export const getStaticProps = ():PropsAllPostsData => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home