import Image from 'next/image';
import * as React from "react";
import Drawer from 'react-modern-drawer';
import Link from 'next/link';
import 'react-modern-drawer/dist/index.css'
import { ReactNode } from "react";
import styles from 'styles/Home.module.scss';
import header_styles from 'styles/Header.module.scss';
import footer_styles from 'styles/Footer.module.scss';
import Articles_styles from 'styles/ArticleList.module.scss';
import Pages_styles from 'styles/Page_Link.module.scss';
import { Tweet, Timeline } from 'react-twitter-widgets';
import { NextPage, GetStaticProps } from 'next';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPaintBrush, faSearch, faKeyboard, faQuestion, faUser, faImage, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faTwitter, faInstagram, faPython, faNodeJs, faReact, faAws, faGithub } from '@fortawesome/free-brands-svg-icons'


interface Props {
    children: ReactNode;
}



{/* Header関数 */}


export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    return(
    <header className={header_styles.header}>
        <Link href="/"><a className={`${header_styles.header_title} ${styles.ubuntu_bold}`}><span>LOGO</span></a></Link>
        <nav className={header_styles.nav}>
        <ul className={header_styles.nav}>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="https://google.com"><a className={`${styles.ubuntu_light}`}>Programming</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="https://google.com"><a className={`${styles.ubuntu_light}`}>Design</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="https://google.com"><a className={`${styles.ubuntu_light}`}>SEO</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="https://google.com"><a className={`${styles.ubuntu_light}`}>Youtube</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="/janle/all"><a className={`${styles.ubuntu_light}`}>All</a></Link></li>
            <li className={`${header_styles.nav_link} ${header_styles.ubuntu_light}`}><Link href="/about"><a className={`${styles.ubuntu_light}`}>About</a></Link></li>
            <form method="get" action="#" className={`${header_styles.search_container} ${header_styles.pc_view_search_container}`}>
                <input className={header_styles.search_bar} type="text" placeholder="Search" />
                <button className={header_styles.search_button} type="submit">
                    <FontAwesomeIcon icon={faSearch} size="1x" color="#FFF" />
                </button>
            </form>
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
                <button onClick={toggleDrawer} className={`${header_styles.drawer_close_button}`}>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav>
            <form method="get" action="#" className={`${header_styles.search_container} ${header_styles.sp_view_search_container}`}>
                <input className={header_styles.search_bar} type="text" placeholder="Search" />
                <button className={header_styles.search_button} type="submit">
                    <FontAwesomeIcon icon={faSearch} size="1x" color="#FFF" />
                </button>
            </form>
            <Link href="/"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>Home</a></Link>
            <Link href="https://google.com"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>Programming</a></Link>
            <Link href="https://google.com"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>Design</a></Link>
            <Link href="https://google.com"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>SEO</a></Link>
            <Link href="/janle/all"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>All</a></Link>
            <Link href="/about"><a className={`${header_styles.drawer_link} ${styles.ubuntu_light}`}>about</a></Link>
            </nav>
        </Drawer>
        </div>
    </header>
    );
}


{/* Footer関数 */}

export function Footer() {
  return(
        <footer className={`${footer_styles.footer}`}>
            <div className={`${footer_styles.footer_logo_div}`}><Link href="/">
                <a className={`${footer_styles.footer_logo} ${styles.ubuntu_bold}`}>
                    <h1>LOGO</h1>
                </a>
            </Link></div>
            <nav>
                <li>
                    <Link href="/about">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium} ${styles.p_ja}`}>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Programming</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Design</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>SEO</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Youtube</a>
                    </Link>
                </li>
                <li>
                    <Link href="https://twitter.com/cupmen4800">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Twitter</a>
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/cupmen4800">
                        <a className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>Github</a>
                    </Link>
                </li>
                <li>
                    <small className={`${footer_styles.footer_nav_link} ${styles.ubuntu_medium}`}>© 2021 LOGO.</small>
                </li>
            </nav>
        </footer>
  )
}


{/* container関数たち*/}




export function Side() {
    return(
        <div className={styles.side_panel}>
            <div className={styles.side_profile}>
                <h1 className={styles.source_han_sans_bold}>誰やお前?</h1>
                <Link href="/about">
                    <a className={`${styles.profile_link}`}><Image src="/logo.svg" alt="profile_icon" width={125} height={125}/>
                    <h1 className={styles.source_han_sans_bold}>cupmen</h1>
                    <p className={styles.source_han_sans_light}>趣味でReactとかPythonやってるやつ</p></a>
                </Link>
            </div>
            <h1 className={`${styles.source_han_sans_bold} ${styles.side_title}`}>プロモ</h1>
            <div className={`${styles.ad_image} ${styles.ad_image_300x300}`}><h1>広告</h1></div>
            <div className={styles.side_ranking}>
                <h1 className={styles.source_han_sans_bold}>おすすめ</h1>
            </div>
        </div>
    );
}



{/* article_list関数 */}

export function Article_List() {
    return(
        <>
        <div className={`${Articles_styles.article_list}`}>
            <Link href="/article/aaa"><a className={Articles_styles.article}>
            <FontAwesomeIcon icon={faPython} size="1x" color="#3a3a3a" className={`${Articles_styles.article_icon}`} />
            <div><h1 className={styles.source_han_sans_bold}>PythonでWeb操作をしよう!</h1>
                    <p>2021.12.4</p>
                    <div className={`${Articles_styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>プログラミング</a></Link>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>Python</a></Link>
                    </div>
                    <p>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
            </div></a></Link>
                <Link href="https://google.com"><a href="https://google.com" className={Articles_styles.article}>
            <FontAwesomeIcon icon={faNodeJs} size="1x" color="#3a3a3a" className={`${Articles_styles.article_icon}`} />
            <div><h1 className={styles.source_han_sans_bold}>Node.Jsの情報が少ないけど躓くエラーTips</h1>
                    <p>2021.12.4</p>
                    <div className={`${styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>プログラミング</a></Link>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>Node</a></Link>
                    </div>
                    <p>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
            </div></a></Link>
            <Link href="https://google.com"><a href="https://google.com" className={Articles_styles.article}>
            <FontAwesomeIcon icon={faReact} size="1x" color="#3a3a3a" className={`${Articles_styles.article_icon}`} />
            <div><h1 className={styles.source_han_sans_bold}>Reactの情報が少ないけど躓くエラーTips</h1>
                    <p>2021.12.4</p>
                    <div className={`${styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>プログラミング</a></Link>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>React</a></Link>
                    </div>
                    <p>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
            </div></a></Link>
            <Link href="https://google.com"><a href="https://google.com" className={Articles_styles.article}>
            <FontAwesomeIcon icon={faAws} size="1x" color="#3a3a3a" className={`${Articles_styles.article_icon}`} />
            <div><h1 className={styles.source_han_sans_bold}>AWSでのよく初心者が躓きがちなことTips</h1>
                    <p>2021.12.4</p>
                    <div className={`${styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>プログラミング</a></Link>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>AWS</a></Link>
                    </div>
                    <p>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
            </div></a></Link>
            <Link href="https://google.com"><a href="https://google.com" className={Articles_styles.article}>
            <FontAwesomeIcon icon={faImage} size="1x" color="#3a3a3a" className={`${Articles_styles.article_icon}`} />
            <div><h1 className={styles.source_han_sans_bold}>写真の見栄えてコントラストと</h1>
                    <p>2021.12.4</p>
                    <div className={`${styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>デザイン</a></Link>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>写真</a></Link>
                    </div>
                    <p>今回は写真を加工する際のコントラスト加工などのコツを伝授します。また、このブログではプログラミングから編集ソフトなどにとらわれないデザインテクニックを解説していきます。</p>
            </div></a></Link>
            <Link href="https://google.com"><a href="https://google.com" className={Articles_styles.article}>
            <FontAwesomeIcon icon={faVideo} size="1x" color="#3a3a3a" className={`${Articles_styles.article_icon}`} />
            <div><h1 className={styles.source_han_sans_bold}>手を抜きつつ動画をおしゃれに見せる方法</h1>
                    <p>2021.12.4</p>
                    <div className={`${styles.source_han_sans_regular} ${Articles_styles.category_tags}`}>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>デザイン</a></Link>
                        <Link href="https://google.com"><a href="https://microsoft.com" className={`${styles.source_han_sans_regular} ${Articles_styles.category_tag}`}>動画</a></Link>
                    </div>
                    <p>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
            </div></a></Link>
        </div>
            <div className={`${Pages_styles.pagelink_div} ${styles.source_han_sans_regular}`}>
              <Link href="https://google.com"><a className={`${Pages_styles.pagelink}`}>←</a></Link>
              <Link href="https://google.com"><a className={`${Pages_styles.pagelink}`}>1</a></Link>
              <Link href="https://google.com"><a className={`${Pages_styles.pagelink}`}>→</a></Link>
            </div>
        </>
    );
}


{/* Others系 */}




export function Others_list() {
    return(
        <div className={Articles_styles.article_list}>
            <h1>All</h1>
            <Link href="https://google.com"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faCode} size="8x" color="#3a3a3a" />
                <p>Programing</p>
            </a></Link>
            <Link href="https://google.com"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faPaintBrush} size="8x" color="#3a3a3a" />
                <p>Design</p>
            </a></Link>
            <Link href="https://google.com"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faSearch} size="8x" color="#3a3a3a" />
                <p>SEO</p>
            </a></Link>
            <Link href="https://google.com"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faKeyboard} size="8x" color="#3a3a3a" />
                <p>Gadget</p>
            </a></Link>
            <Link href="https://google.com"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faYoutube} size="8x" color="#3a3a3a" />
                <p>Youtube</p>
            </a></Link>
            <Link href="https://twitter.com/cupmen4800"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faTwitter} size="8x" color="#3a3a3a" />
                <p>Twitter</p>
            </a></Link>
            <Link href="https://google.com"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faInstagram} size="8x" color="#3a3a3a" />
                <p>Instagram</p>
            </a></Link>
            <Link href="https://github.com/cupmen4800"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faGithub} size="8x" color="#3a3a3a" />
                <p className={`${Articles_styles.p_ja}`}>Github</p>
            </a></Link>
            <Link href="/about"><a className={`${Articles_styles.others_card} ${Articles_styles.article}`}>
                <FontAwesomeIcon className={`${Articles_styles.others_icon}`} icon={faUser} size="8x" color="#3a3a3a" />
                <p className={`${Articles_styles.p_ja}`}>About</p>
            </a></Link>
        </div>
    );
}




export function NotFoundContainer() {
    return(
        <div className={Articles_styles.article_list}>
            <Image src="/storage/img/error/404.svg" alt="404 NotFound" className={`${Articles_styles.error_img}`} width={1000} height={600} />
            <p className={`${Articles_styles.error_text} ${Articles_styles.source_han_sans_regular}`}>記事が削除されたかURLが変更されたため記事を表示できません。
            </p>
            <form method="get" action="#" className={`${Articles_styles.search_container}  ${Articles_styles.error_search}`}>
                <input className={`${Articles_styles.search_bar} ${Articles_styles.not_sea_btn}`} type="text" placeholder="Search" />
                <button className={`${Articles_styles.error_search_button} ${Articles_styles.search_button}`} type="submit">
                    <FontAwesomeIcon icon={faSearch} className={`${Articles_styles.aaa}`} color="#FFF" />
                </button>
            </form>
            <div className={Articles_styles.error_tips}>
                <h2 className={styles.source_han_sans_bold}>404 Tips</h2>
                <p>
                    ちなみに、この画像はundrawていうサイトの画像だよ案件とかじゃないけど(案件だったらこんなところに書かない)
                    あと、個人的に海外のイラストとかってかっこいい感じがする
                </p>
            </div>
        </div>
    )
}






{/* パーツたち */}