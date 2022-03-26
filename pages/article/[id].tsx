import Head from 'next/head'
import Link from 'next/link'
import {getAllPostIds, getPostData} from 'lib/posts'
import { postData,staticPaths, staticProps } from 'interfaces'
import { NextPage } from 'next'
import styles from 'styles/Home.module.scss';
import Article_styles from 'styles/Article.module.scss';
import Articles_styles from 'styles/ArticleList.module.scss';
import ReactMarkdown from 'react-markdown'
import Skeleton from "react-loading-skeleton";
import { CodeBlock, ankerLink, H2 } from 'components/Layout_parts'

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

export const getStaticPaths = async ():Promise<staticPaths> => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}:{params:{id:string}}):Promise <staticProps>=>{
    const postData = await getPostData(params.id)
    return {
        props: {
          postData
        }
    }
}

// HTML...
const Post:NextPage<{postData:postData}> = ({postData}:{postData:postData}) => {
  return (
    <>
      <Head>
        <title>{postData.title} - {process.env.NEXT_PUBLIC_SITETITLE}</title>
        <meta name="keywords" content={`LEEKS.com ${postData.janle},${postData.category},${postData.view_janle},${postData.view_category}`}/>
        <meta name="description" content={`${postData.detail}`}/>
        <meta property="og:url" content={`leekscom.com/article/${postData.id}`} />
        <meta property="og:type" content="article"/>
        <meta property="og:title" content={`${postData.title} - LEEKS.com`}/>
        <meta property="og:description" content={`${postData.detail}`}/>
        <meta property="og:site_name" content="LEEKS.com" />
        <meta property="og:image" content=" サムネイル画像の URL" />
      </Head>
      <article className={`${Article_styles.article}`}>
        <h1>{postData.title || <Skeleton />}</h1>
          <div className={`${Articles_styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
            <Link href={`/${postData.janle}`}><a className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>{ postData.view_janle }</a></Link>
            <Link href={`/${postData.janle}/${postData.category}`}><a className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>{ postData.view_category }</a></Link>
          </div>
        <time dateTime={postData.date} className={`${Article_styles.time}`}>投稿日: {postData.date}</time>
        <div className={`${Article_styles.TableOFContents}`}>
          <p className={`${Article_styles.AnkerTitle}`}>目次</p>
          <ul>
            <ReactMarkdown components={{h2: ankerLink}} allowedElements={["h2"]}>{postData.Content}</ReactMarkdown>
          </ul>
        </div>
        <div id={`${Article_styles.ArticleContent}`}>
          <ReactMarkdown components={{code: CodeBlock, h2: H2}}>
            {postData.Content}
          </ReactMarkdown>
        </div>
        <div className={`${Article_styles.sns_share_div}`}>
          <TwitterShareButton url={`https://leekscom.com/article/${postData.id}`} title={postData.sns_detail}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <FacebookShareButton url={`https://leekscom.com/article/${postData.id}`} title={postData.sns_detail}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <HatenaShareButton url={`https://leekscon.com/article/${postData.id}`} title={postData.sns_detail}>
            <HatenaIcon size={32} round />
          </HatenaShareButton>
          <LineShareButton url={`https://leekscon.com/article/${postData.id}`} title={postData.sns_detail}>
            <LineIcon size={32} round/>
          </LineShareButton>
        </div>
      </article>
    </>
  )
}
export default Post