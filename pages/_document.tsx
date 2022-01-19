import React from "react"
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="プログラミング デザイン SEO Python React Next.js JS TS javascript typescript" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap" rel="stylesheet"></link>
                    <link rel="icon" href="/logo.svg" />
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
