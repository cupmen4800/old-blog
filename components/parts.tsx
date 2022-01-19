import Image from 'next/image';
import * as React from "react";
import Link from 'next/link';
import 'react-modern-drawer/dist/index.css'
import { ReactNode } from "react";
import styles from 'styles/Home.module.scss';
import Article_styles from 'styles/Article.module.scss';
import { Tweet, Timeline } from 'react-twitter-widgets';
import fs from 'fs';
import { NextPage, GetStaticProps } from 'next';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPaintBrush, faSearch, faKeyboard, faQuestion, faUser, faImage, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faTwitter, faInstagram, faPython, faNodeJs, faReact, faAws, faGithub } from '@fortawesome/free-brands-svg-icons'


interface Props {
    children: ReactNode;
}

// Time Tags

export const Time = (props: Props) => {
  return(
    <time
    className={`${Article_styles.time}`} dateTime="2019-04-21T10:07:04Z">投稿日:{props.children}</time>
  );
};
export const UpdateTime = (props: Props) => {
  return(
    <time
    className={`${Article_styles.time}`} dateTime="2019-04-21T10:07:04Z">更新日:{props.children}</time>
  );
};

// Button

export const Button = (props: Props) => {
  return(
    <Link href="https://google.com"><a className={Article_styles.button}>詳しくはこちら</a></Link>
  );
};






{/* パーツたち */}