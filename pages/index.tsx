import Head from 'next/head'
import Link from 'next/link'
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
  return (
        <div className={`${Articles_styles.article_list}`}>
          {allPostsData.map(({ id, data }) => (
          <Link href={`/article/${id}`}><a className={Articles_styles.article} key={id}>
            <FontAwesomeIcon icon={faPython} size="1x" color="#3a3a3a" className={`${Articles_styles.article_icon}`} />
            <div><h1 className={styles.source_han_sans_bold}>{ data.title }</h1>
              <p className={styles.source_han_sans_light}>投稿日： 更新日:</p>
              <div className={`${Articles_styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
                <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>{ data.janle }</a></Link>
                <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>{ data.category }</a></Link>
              </div>
              <p className={styles.source_han_sans_light}>{ data.detail }</p>
            </div>
          </a></Link>
          ))}
      </div>
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