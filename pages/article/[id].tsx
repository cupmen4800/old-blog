import Head from 'next/head'
import Link from 'next/link'
import {getAllPostIds, getPostData} from 'lib/posts'
import { postData,staticPaths, staticProps } from 'interfaces'
import { NextPage } from 'next'
import Article_styles from 'styles/Article.module.scss';
import Articles_styles from 'styles/ArticleList.module.scss';
import ReactMarkdown from 'react-markdown'
import { CodeBlock, ankerLink, H2, CustomLink } from 'components/Layout_parts'
import Layout from 'components/Layout';

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

type articleType = {
  id:string,
  title: string,
  date:string,
  janle:string,
  view_janle:string,
  category:string,
  view_category:string,
  Content:string
}

const ArticlePage = (postData: articleType) => {
  return(
    <article className={`${Article_styles.article}`}>
      <h1>{postData.title}</h1>
      <div className={`${Articles_styles.category_tags}`}>
        <Link href={`/${postData.janle}`}><a className={`${Articles_styles.category_tag}`}>{ postData.view_janle }</a></Link>
        <Link href={`/${postData.janle}/${postData.category}`}><a className={`${Articles_styles.category_tag}`}>{ postData.view_category }</a></Link>
      </div>
      <time dateTime={postData.date} className={`${Article_styles.time}`}>投稿日: {postData.date}</time>
      <div id={`${Article_styles.TableOFContents}`}>
        <p className={`${Article_styles.AnkerTitle}`}>目次</p>
        <ul>
          <ReactMarkdown components={{h2: ankerLink}} allowedElements={["h2"]}>{postData.Content}</ReactMarkdown>
        </ul>
      </div>
      <div id={`${Article_styles.ArticleContent}`}>
        <ReactMarkdown components={{code: CodeBlock, h2: H2, a: CustomLink}}>
          {postData.Content}
        </ReactMarkdown>
      </div>
      <div className={`${Article_styles.sns_share_div}`}>
        <TwitterShareButton url={`${process.env.NEXT_PUBLIC_SITEDOMAIN}/article/${postData.id}`} title={postData.title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton url={`${process.env.NEXT_PUBLIC_SITEDOMAIN}/article/${postData.id}`} title={postData.title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <HatenaShareButton url={`${process.env.NEXT_PUBLIC_SITEDOMAIN}/article/${postData.id}`} title={postData.title}>
          <HatenaIcon size={32} round />
        </HatenaShareButton>
        <LineShareButton url={`${process.env.NEXT_PUBLIC_SITEDOMAIN}/article/${postData.id}`} title={postData.title}>
          <LineIcon size={32} round/>
        </LineShareButton>
      </div>
    </article>
  )
}

// HTML...
const Post:NextPage<{postData:postData}> = ({postData}:{postData:postData}) => {
  return (
    <>
      <Head>
        <title>{postData.title} - {process.env.NEXT_PUBLIC_SITETITLE}</title>
        <meta name="keywords" content={`${process.env.NEXT_PUBLIC_SITETITLE},${postData.janle},${postData.category},${postData.view_janle},${postData.view_category}`}/>
        <meta name="description" content={`${postData.detail}`}/>
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITEDOMAIN}/article/${postData.id}`} />
        <meta property="og:type" content="article"/>
        <meta property="og:title" content={`${postData.title} - ${process.env.NEXT_PUBLIC_SITETITLE}`}/>
        <meta property="og:description" content={`${postData.detail}`}/>
      </Head>
        <Layout>
          <ArticlePage
          id={postData.id}
          title={postData.title}
          date={postData.date}
          janle={postData.janle}
          view_janle={postData.view_janle}
          category={postData.category}
          view_category={postData.view_category}
          Content={postData.Content}
          />
      </Layout>
    </>
  )
}
export default Post