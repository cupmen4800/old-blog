import Head from 'next/head'
import Articles_styles from 'styles/ArticleList.module.scss';
import styles from 'styles/Home.module.scss';
import React, { useState } from 'react';
import Article_styles from "styles/Article.module.scss"
import Layout from 'components/Layout';

const AboutArticle = () => {
  return(
    <>
      <article className={`${Article_styles.article}`}>
        <h1>本サイトについて</h1>
        <div id={`${Article_styles.ArticleContent}`}>
          <h2>{`${process.env.NEXT_PUBLIC_SITETITLE}`}について</h2>
          <p>
          {`${process.env.NEXT_PUBLIC_SITETITLE}`}は当サイトの管理人であるcupmenが趣味で運営してるサイトです。
          </p>
          <p>
            2022年時点では、技術関連のことをメインに普段使える作業自動化等とWEB関連のことを発信しています。
          </p>
          <p>
            その他にもデザインとかSEOについても分かる範囲でやっていきます。
          </p>
          <h2>連絡について</h2>
          <p>連絡はこちらのメールアドレスに連絡をください。</p>
          <p>
            <a href="noodle4800@gmail.com">noodle4800@gmail.com</a>
          </p>
          <h2>プライバシーポリシー</h2>
          <h3>著作権と免責事項</h3>
          <ul>
            <li>当サイトに存在する、文章・画像・動画等の著作物の情報を無断転載することを禁止します。</li>
            <li>引用の範囲を超えるものについては、法的処置を行います。</li>
            <li>転載する際には、お問合せより必ず事前にご連絡お願いします。</li>
          </ul>
          <h3>使用しているアクセス解析ツールについて</h3>
            <p>本サイトでは、Google アナリティクスを使用しています。</p>
            <p>Google アナリティクスではCookieを使用してトラフィックデータを集計していますが、匿名で収集されており個人を特定するものではありません。</p>
            <p>集計を拒否したい場合はブラウザの設定でCookieを無効化することで拒否できます。</p>
            <p>また、Google アナリティクスの規約については下記をご確認ください。</p>
            <ul>
              <li>
                <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Google アナリティクス利用規約</a>
              </li>
              <li>
                <a href="https://policies.google.com/technologies/partner-sites?hl=ja">Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用</a>
              </li>
            </ul>
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