import Head from 'next/head'
import Articles_styles from 'styles/ArticleList.module.scss';
import styles from 'styles/Home.module.scss';
import React, { useState } from 'react';
import Article_styles from "styles/Article.module.scss"

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
            基本的には歓迎ですが以下のような条件を設けます。
            <h3>条件について</h3>
            <ul>
              <li>ジャンルが一緒(技術系、デザイン、SEOなど)の方のみ</li>
              <li>相互リンク集などへの貼り付けは禁止しています</li>
              <li>そのサイトのコメントなどにスパムなどがないこと</li>
              <li>一応、Twiter(@cupmen4800)のDMで連絡ください</li>
            </ul>
            <p>掲載位置は連絡が来てから決めます。</p>
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
          <p>本サイトではアクセス解析などに「Googleアナリティクス」を使用しています。</p>
          <p>Googleアナリティクスはアクセストラフィックを収集するためにCookie(※氏名、住所、電話番号、メールアドレスな等の個人を特定できる情報は含まれません。)を収集しています。このトラフィックデータは匿名で収集されており、個人を特定するためのものではありません。</p>
          <p><a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Google アナリティクス利用規約</a></p>
          <p><a href="https://policies.google.com/technologies/partner-sites?hl=ja">Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用</a></p>
        </div>
      </article>
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