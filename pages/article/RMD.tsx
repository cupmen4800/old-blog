import Head from 'next/head'
import Link from 'next/link'
import {getAllPostIds, getPostData} from 'lib/posts'
import { postData,staticPaths, staticProps } from 'interfaces'
import { NextPage } from 'next'
import styles from 'styles/Home.module.scss';
import Article_styles from 'styles/Article.module.scss';
import Articles_styles from 'styles/ArticleList.module.scss';
import fs from 'fs'
import ReactMarkdown from 'react-markdown'

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    HatenaShareButton,
    HatenaIcon,
    LineShareButton,
    LineIcon
} from 'react-share';

export const getStaticProps = async () =>{
  const Terms = fs.readFileSync(process.cwd() + `/posts/test01.md`, 'utf8')
    return {
        props: {
            Terms: Terms
        }
    }
}

// HTML...
const Post:NextPage<{Terms:any}> = ({Terms}:{Terms:any}) => {
  return (
    <p>{Terms}</p>
  )
}
export default Post