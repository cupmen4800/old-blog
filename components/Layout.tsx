import { Header, Footer, Side } from 'components/Layout_parts';
import fs from 'fs'
import React from "react";
import { ReactNode } from "react";
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link';
import styles from 'styles/Home.module.scss';
import Articles_styles from 'styles/ArticleList.module.scss';

interface Props{
    children: ReactNode;
}

function Layout(props: Props) {
    return (
      <div className={styles.main}>
        <Header/>
        <div className={styles.contents}>
          <Side></Side>
          <main className={styles.main_panel}>
            {props.children}
          </main>
        </div>
        <Footer></Footer>
      </div>
    )
}

export default Layout;