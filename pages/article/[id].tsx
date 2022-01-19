import Head from 'next/head'
import {getAllPostIds, getPostData} from 'lib/posts'
import { postData,staticPaths, staticProps } from 'interfaces'
import { NextPage } from 'next'
import Article_styles from 'styles/Article.module.scss';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    HatenaShareButton,
    HatenaIcon
} from 'react-share';

export const getStaticPaths = async ():Promise<staticPaths> => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}:{params:{id:string}}):Promise<staticProps>=>{
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

const Post:NextPage<{postData:postData}> = ({postData}:{postData:postData}) => {
    return (
    <>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className={`${Article_styles.article}`}>
          <h1 >{postData.title}</h1>
          <p className={`${Article_styles.time}`}>投稿日: <time>{postData.time}</time></p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <div className={`${Article_styles.sns_share_div}`}>
            <TwitterShareButton url={`https://localhost/article/${postData.id}`} title={postData.sns_detail}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton url={`https://localhost/article/${postData.id}`} title={postData.sns_detail}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <HatenaShareButton url={`https://localhost/article/${postData.id}`} title={postData.sns_detail}>
              <HatenaIcon size={32} round />
            </HatenaShareButton>
          </div>
        </article>
    </>
    )
}
export default Post