import Head from 'next/head'
import Articles_styles from 'styles/ArticleList.module.scss';
import styles from 'styles/Home.module.scss';
import React, { useState } from 'react';
import Article_styles from "styles/Article.module.scss"
import Layout from 'components/Layout';

const AboutArticle = () => {
  return(
    <>
      <div className={`${Article_styles.article}`}>
        <h1>本サイトについて</h1>
      </div>
      <article className={`${Article_styles.article}`}>
        <div id={`${Article_styles.ArticleContent}`}>
          <h2>{`${process.env.NEXT_PUBLIC_SITETITLE}`}について</h2>
          <p>
          {`${process.env.NEXT_PUBLIC_SITETITLE}`}は中の人(cupmen)が趣味で運営してるサイトです。
          </p>
          <p>
            2022年時点では、技術関連のことをメインに普段使える作業自動化等とWEB関連のことを発信しています。
          </p>
          <p>
            その他にもデザインとかSEOについても分かる範囲でやっていきます。
          </p>
          <h2>相互リンクについて</h2>
          <p>
            お断りしています。
          </p>
          <h2>連絡について</h2>
          <p>連絡はこのメールアドレス(noodle4800@gmail.com)に連絡をください。</p>
          <h2>プライバシーポリシー</h2>
          <h3>著作権と免責事項</h3>
          <ul>
            <li>当サイトに存在する、文章・画像・動画等の著作物の情報を無断転載することを禁止します。</li>
            <li>引用の範囲を超えるものについては、法的処置を行います。</li>
            <li>転載する際には、お問合せより必ず事前にご連絡お願いします。</li>
          </ul>
          <h3>使用しているアクセス解析ツールについて</h3>
            <p>アクセス解析ツールにつきましては現在使用しておりません。</p>
            <p>使用する際にはプライバシーポリシーのこの項目を一部改定します。</p>
        </div>
      </article>
    </>
    )
}

const About = () => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITETITLE} - About</title>
        <meta name="keywords" content={process.env.NEXT_PUBLIC_INDEXKEYWORD}/>
        <meta name="description" content={process.env.NEXT_PUBLIC_INDEXDESCRIPTION}/>
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITEDOMAIN}/about`} />
        <meta property="og:type" content={process.env.NEXT_PUBLIC_INDEXTYPE}/>
        <meta property="og:title" content={`${process.env.NEXT_PUBLIC_SITETITLE} - About`}/>
        <meta property="og:description" content={process.env.NEXT_PUBLIC_INDEXDESCRIPTION}/>
      </Head>
      <Layout>
        <AboutArticle/>
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

export default About