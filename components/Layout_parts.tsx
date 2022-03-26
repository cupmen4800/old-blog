import Image from 'next/image';
import Drawer from 'react-modern-drawer';
import Link from 'next/link';
import 'react-modern-drawer/dist/index.css'
import { ReactNode, useState, Component } from "react";
import styles from 'styles/Home.module.scss';
import header_styles from 'styles/Header.module.scss';
import footer_styles from 'styles/Footer.module.scss';
import Articles_styles from 'styles/ArticleList.module.scss';
import Article_styles from 'styles/Article.module.scss';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, Configure, Pagination, PoweredBy } from 'react-instantsearch-dom';
import { useFadeInOut } from "components/useFadeInOut";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faSearch, faKeyboard, faQuestion, faUser, faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faInstagram, faPython, faNodeJs, faReact, faAws, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Hit } from 'react-instantsearch-core';
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import YouTubeEmbed from "react-youtube";
import Skeleton from "react-loading-skeleton";

interface ArticleProps {
    title: string;
    janle: string;
    category: string;
    view_janle: string;
    view_category: string;
    date: string;
    detail: string;
}
interface searchArticleProps {
    title: string;
    janle: string;
    category: string;
    view_janle: string;
    view_category: string;
    date: string;
}

const searchClient = algoliasearch('AG783LQQY3', '73d4d320e08b008e617f4e1ef1734ae5');
const searchIndex = "blogs";

{/* Header関数 */}

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const { toggleDisplay, boxStyle } = useFadeInOut(0.2)
    const [showSearchModal, setShowSearchModal] = useState(false);
    const ShowSearchModal = () => {
      setShowSearchModal(true);
    };
    return(
      <>
      <header className={header_styles.header}>
        <Link href="/"><a className={`${header_styles.header_title} ${styles.ubuntu_bold}`}><img src="/storage/img/logo/logoblack.svg" alt={`${process.env.NEXT_PUBLIC_SITETITLE}`}/></a></Link>
        <nav className={header_styles.nav}>
        <ul className={header_styles.nav}>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="/programming"><a className={`${styles.ubuntu_light}`}>Programming</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="/design"><a className={`${styles.ubuntu_light}`}>Design</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="/seo"><a className={`${styles.ubuntu_light}`}>SEO</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="/"><a className={`${styles.ubuntu_light}`}>Youtube</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="/all"><a className={`${styles.ubuntu_light}`}>All</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="/about"><a className={`${styles.ubuntu_light}`}>About</a></Link></li>
            <a onClick={toggleDisplay} className={`${styles.search_container} ${header_styles.pc_view_search_container}`}>
                <div className={styles.search_bar} placeholder="Search" />
                <div className={`${styles.search_button} ${header_styles.search_button}`}>
                    <FontAwesomeIcon icon={faSearch} size="1x" color="#FFF" />
                </div>
            </a>
            <button onClick={toggleDrawer} className={`${header_styles.menu_trigger}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </ul>
        </nav>
        <div>
        <Drawer className={`${header_styles.drawer}`} open={isOpen} onClose={toggleDrawer} zIndex={10000} direction='right'>
            <div className={`${header_styles.drawer_close_button_div}`}>
            </div>
            <nav>
            <a style={{width: "100%"}} href="/search">
              <div className={`${styles.search_container} ${header_styles.sp_view_search_container}`}>
                <div className={`${styles.search_bar} ${header_styles.sp_search_bar}`}/>
                <div className={`${styles.search_button} ${header_styles.sp_search_button}`}>
                  <FontAwesomeIcon icon={faSearch} size="1x" color="#FFF"/>
                </div>
              </div>
            </a>
            <Link href="/"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>Home</a></Link>
            <Link href="/programming"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>Programming</a></Link>
            <Link href="/design"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>Design</a></Link>
            <Link href="/seo"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>SEO</a></Link>
            <Link href="/all"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>All</a></Link>
            <Link href="/about"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>about</a></Link>
            </nav>
        </Drawer>
        </div>
    </header>
    <SearchModal showFlag={boxStyle} setShowModal={toggleDisplay}/>
    </>
    );
}

{/* Footer関数 */}

export function Footer() {
  return(
        <footer className={`${footer_styles.footer}`}>
            <div className={`${footer_styles.footer_logo_div}`}><Link href="/">
                <a className={`${footer_styles.footer_logo} ${styles.ubuntu_bold}`}>
                  <img src="/storage/img/logo/logowhite.svg" alt={`${process.env.NEXT_PUBLIC_SITETITLE}`}/>
                </a>
            </Link></div>
            <nav>
                <li>
                    <Link href="/">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium} ${styles.p_ja}`}>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/programming">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Programming</a>
                    </Link>
                </li>
                <li>
                    <Link href="/design">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Design</a>
                    </Link>
                </li>
                <li>
                    <Link href="/seo">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>SEO</a>
                    </Link>
                </li>
                <li>
                    <Link href={`${process.env.NEXT_PUBLIC_YTLINK}`}>
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Youtube</a>
                    </Link>
                </li>
                <li>
                    <Link href={`${process.env.NEXT_PUBLIC_TWLINK}`}>
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Twitter</a>
                    </Link>
                </li>
                <li>
                    <Link href={`${process.env.NEXT_PUBLIC_GHLINK}`}>
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>GitHub</a>
                    </Link>
                </li>
                <li>
                    <small className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>© 2022 {`${process.env.NEXT_PUBLIC_SITETITLE}`}.</small>
                </li>
            </nav>
        </footer>
  )
}

{/* container関数たち*/}

export const Side = () => {
  return(
    <aside className={styles.side_panel}>
      <div className={styles.side_profile}>
        <h2 className={styles.source_han_sans_bold}>誰やお前?</h2>
        <Link href="/about">
          <a className={`${styles.profile_link}`}><Image src="/storage/img/icon/icon.svg" alt="profile_icon" width={125} height={125}/>
            <h2 className={styles.source_han_sans_bold}>
              cupmen
            </h2>
            <p className={styles.source_han_sans_light}>
              お金ちょーだい
            </p>
          </a>
        </Link>
      </div>
      <div className={`${styles.side_janles_div}`}>
        <h2 className={styles.source_han_sans_bold}>カテゴリ</h2>
        <div className={`${styles.janles}`}>
            <Link href="/programming/react">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/react.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>React</h2>
              </a>
            </Link>
            <Link href="/programming/docker">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/docker.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>Docker</h2>
              </a>
            </Link>
            <Link href="/programming/python">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/python.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>Python</h2>
            </a>
            </Link>
            <Link href="/programming/node.js">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/node.js.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>Node.js</h2>
              </a>
            </Link>
            <Link href="/programming/linux">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/linux.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>Linux</h2>
              </a>
            </Link>
            <Link href="/seo/web">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/web.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>ウェブSEO</h2>
              </a>
            </Link>
            <Link href="/seo/youtube">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/youtube.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>Youtube SEO</h2>
              </a>
            </Link>
            <Link href="/seo/sns">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/sns.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>SNS SEO</h2>
              </a>
            </Link>
            <Link href="/design/photo">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/photo.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>Photo</h2>
              </a>
            </Link>
            <Link href="/design/movie">
              <a className={`${styles.janle_div}`}>
                <object type="image/svg+xml" data={`/storage/img/janle-icon/movie.svg`} className={`${Articles_styles.article_icon}`}/>
                <h2>Movie</h2>
              </a>
            </Link>
        </div>
      </div>
    </aside>
  );
}

{/* Others系 */}

export function Others_list() {
    return(
        <div className={Articles_styles.article_list}>
            <h2 className={Articles_styles.home_h2}>All</h2>
            <Link href="/programming"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faCode} size="8x" color="#3a3a3a" />
                <p>Programing</p>
            </a></Link>
            <Link href="/design"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faPaintBrush} size="8x" color="#3a3a3a" />
                <p>Design</p>
            </a></Link>
            <Link href="/seo"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faSearch} size="8x" color="#3a3a3a" />
                <p>SEO</p>
            </a></Link>
            <Link href={`${process.env.NEXT_PUBLIC_YTLINK}`}><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faYoutube} size="8x" color="#3a3a3a" />
                <p>Youtube</p>
            </a></Link>
            <Link href={`${process.env.NEXT_PUBLIC_TWLINK}`}><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faTwitter} size="8x" color="#3a3a3a" />
                <p>Twitter</p>
            </a></Link>
            <Link href={`${process.env.NEXT_PUBLIC_GHLINK}`}><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faGithub} size="8x" color="#3a3a3a" />
                <p className={`${Articles_styles.p_ja}`}>GitHub</p>
            </a></Link>
            <Link href="/about"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faUser} size="8x" color="#3a3a3a" />
                <p className={`${Articles_styles.p_ja}`}>About</p>
            </a></Link>
        </div>
    );
}

export const NotFoundContainer = () => {
    return(
        <div className={Articles_styles.article_list}>
            <Image src="/storage/img/error/404.svg" alt="404 NotFound" className={`${Articles_styles.error_img}`} width={1000} height={600} />
            <p className={`${Articles_styles.error_text} ${Articles_styles.source_han_sans_regular}`}>記事が削除されたかURLが変更されたため記事を表示できません。
            </p>
            <InstantSearch indexName={searchIndex} searchClient={searchClient}>
              <SearchBox/>
              <div className={`${header_styles.search_list}`}>
                <Configure hitsPerPage={5} />
                <Hits hitComponent={SearchhitComponent} />
                <Pagination />
                <PoweredBy />
              </div>
            </InstantSearch>
        </div>
    )
}

export const Article = (props: ArticleProps) => {
    return(
        <><object type="image/svg+xml" data={`/storage/img/janle-icon/${props.category}.svg`} className={`${Articles_styles.article_icon}`}/>
        <div><h2 className={`${styles.source_han_sans_bold} ${Articles_styles.Articleh2}`}>{ props.title }</h2>
          <p className={`${Articles_styles.timeDetail} ${styles.source_han_sans_light}`}><time dateTime={props.date}>投稿日： {props.date}</time></p>
          <div className={`${Articles_styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
            <Link href={`/${props.janle}`}><a className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>{ props.view_janle }</a></Link>
            <Link href={`/${props.janle}/${props.category}`}><a className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>{ props.view_category }</a></Link>
          </div>
          <p className={`${Articles_styles.timeDetail} ${styles.source_han_sans_light}`}>{ props.detail }</p>
        </div>
        </>
    )
}
export const SearchArticle = (props: searchArticleProps) => {
    return(
        <>
        <object type="image/svg+xml" data={`/storage/img/janle-icon/${props.category}.svg`} className={`${Articles_styles.searcharticle_icon}`}/>
        <div><h2 className={`${styles.source_han_sans_bold} ${Articles_styles.searchArticleh2}`}>{ props.title }</h2>
          <time dateTime={props.date} className={`${Articles_styles.searchTimeDetail} ${styles.source_han_sans_light}`}>投稿日： {props.date}</time>
          <div className={`${Articles_styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
            <Link href={`/${props.janle}`}><a className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag} ${Articles_styles.searchCategoryTag}`}>{ props.view_janle }</a></Link>
            <Link href={`/${props.janle}/${props.category}`}><a className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag} ${Articles_styles.searchCategoryTag}`}>{ props.view_category }</a></Link>
          </div>
        </div>
        </>
    )
}


interface HitDoc {
  objectID: string;
  id:string
  content: string
  data: {title:string, date:string, janle:string, view_janle:string, category:string, view_category:string, sns_detail: string}
  isEmpty: boolean
  excerpt: string
  orig: string
}

interface HitcomProps {
  hit: Hit<HitDoc>;
}

interface HitComponentProps extends HitcomProps {
  onClick: () => void;
}

function HitComponent({ hit }: HitComponentProps): JSX.Element {
  return (
      <a href={`/article/${hit.id}`} className={Articles_styles.article} key={hit.data.date}>
        <SearchArticle
        title={hit.data.title}
        janle={hit.data.janle}
        category={hit.data.category}
        view_janle={hit.data.view_janle}
        view_category={hit.data.view_category}
        date={hit.data.date}
        />
    </a>
  );
}

export const hitComponent = ({ hit }: HitcomProps): JSX.Element => (
  <HitComponent hit={hit} onClick={() => null} />
);

interface SearchProps {
  showFlag: any,
  setShowModal: any
}

const SearchModal = (props: SearchProps) => {
  const closeModal = () => {
    props.setShowModal(false);
  };
  return (
    <>
      {props.showFlag ? ( // showFlagがtrueだったらModalを表示する
        <div id={`${header_styles.modal}`} style={props.showFlag}>
          <div id={`${header_styles.modalclose}`}></div>
          <div id={`${header_styles.search_window}`}>
            <InstantSearch indexName={searchIndex} searchClient={searchClient}>
              <div className={`${header_styles.X}`}>
                <SearchBox />
                <a onClick={closeModal}>
                  <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g id="b"><g id="c"><rect width="48" height="48" style={{fill:"none"}}/></g><g id="d"><line x1="12.13" y1="12.63" x2="36.13" y2="36.13" style={{fill:"none", stroke:"#3a3a3a"}}/><line x1="12.38" y1="36.38" x2="35.88" y2="12.38" style={{fill:"none", stroke:"#3a3a3a"}}/></g></g></svg>
                </a>
              </div>
              <div className={`${header_styles.search_list}`}>
                <Configure hitsPerPage={4} />
                <Hits hitComponent={hitComponent} />
                <Pagination />
                <PoweredBy />
              </div>
            </InstantSearch>
          </div>
        </div>
      ) : (
        <></>// showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

interface SearchHitDoc {
  objectID: string;
  id:string
  content: string
  data: {title:string, detail:string, date:string, janle:string, view_janle:string, category:string, view_category:string, sns_detail: string}
  isEmpty: boolean
  excerpt: string
  orig: string
}

interface SearchHitcomProps {
  hit: Hit<SearchHitDoc>;
}

interface SearchHitComponentProps extends SearchHitcomProps {
  onClick: () => void;
}

function SearchHitComponent({ hit }: SearchHitComponentProps): JSX.Element {
  return (
      <a href={`/article/${hit.id}`} className={Articles_styles.article} key={hit.data.date}>
        <Article
        title={hit.data.title}
        janle={hit.data.janle}
        category={hit.data.category}
        view_janle={hit.data.view_janle}
        view_category={hit.data.view_category}
        detail={hit.data.detail}
        date={hit.data.date}
        />
    </a>
  );
}

export const SearchhitComponent = ({ hit }: SearchHitcomProps): JSX.Element => (
  <SearchHitComponent hit={hit} onClick={() => null} />
);

export const CodeBlock = ({ className, children, ...props }: CodeProps) => {
  // カスタム値の判定材料を抽出
  const prefix = "language-";
  const classes = className
    ?.split(" ")
    .find((c) => c.startsWith(prefix))
    ?.replace(prefix, "");
  const params = classes ? classes.split(":") : [];

  if (params.length > 0 && params[0] === "twitter") {
    // Twitter埋め込み
    const id = children.toString().replace(/\r?\n/g, "");
    return <TwitterTweetEmbed tweetId={id} placeholder={<Skeleton height={300}/>}/>;
  }

  if (params.length > 0 && params[0] === "youtube") {
    // YouTube埋め込み
    const id = children.toString().replace(/\r?\n/g, "");
    return <YouTubeEmbed videoId={id}/>;
  }

  // 通常のコンポーネントを返却
  return (
  <div className={`${Article_styles.codeblock}`}>
    <code className={`${className} ${Article_styles.TWYT}`}>
      {children || <Skeleton />}
    </code>
  </div>);
};
export const H2 = ({ node, children}: {node: any, children: any}) => {
  return (
    <h2 id={node.position?.start.line.toString()}>{children}</h2>
  );
}

export const ankerLink = ({ node, children }: {node:any, children: any}) => {
  return (
    <li>
      <a href={"#"+node.position?.start.line.toString()} className={`${Article_styles.tocLink}`}>{children}</a>
    </li>
  );
}

export const CardLink = ({ node, children }: {node:any, children: any}) => {
  return (
    <li>
      <a href={"#"+node.position?.start.line.toString()} className={`${Article_styles.tocLink}`}>{children}</a>
    </li>
  );
}