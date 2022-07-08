import React from "react"
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';

class MyDocument extends Document {

    render() {
        const { locale } = this.props.__NEXT_DATA__ // locale
        return (
            <Html lang="ja" dir="ltr">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="keywords" content={`${process.env.NEXT_PUBLIC_SITETITLE},プログラミング,デザイン,web,ウェブ,ウェブデザイン,SEO,Youtube`}/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap" rel="stylesheet"></link>
                    <link rel="icon" href="/storage/img/favicon/favicon.svg" />
                    <link rel="apple-touch-icon" href="/storage/img/favicon/favicon.svg" />
                    <meta property="og:image" content="https://leeks.dev./storage/img/LEEKSdevOGP.png" />
                    <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITETITLE} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@cupmen4800" />
                    <meta name="twitter:player" content="@cupmen4800" />
                </Head>
                <body className="antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
