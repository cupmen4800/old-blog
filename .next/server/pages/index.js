"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(776);
/* harmony import */ var styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(513);
/* harmony import */ var styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9700);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Layout_parts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1371);
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8970);
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(algoliasearch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1943);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);













const postsDirectory = path__WEBPACK_IMPORTED_MODULE_8___default().join(process.cwd(), "/posts");
const Home = ({ allPostsData  })=>{
    const { 0: offset , 1: setOffset  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0); // Number Item View
    const perPage = 10; // 1Page Items
    // Click function
    const handlePageChange = (data)=>{
        let page_number = data["selected"]; // クリックした部分のページ数が{selected: 2}のような形で返ってくる
        setOffset(page_number * perPage); // offsetを変更し、表示開始するアイテムの番号を変更
    };
    const HTMLHead = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "LEEKS.dev"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: "プログラミング SEO デザイン PC Youtube"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "LEEKS.devは中の人(cupmen)が趣味で運営してるサイトです。2022年時点では、技術関連のことをメインに普段使える作業自動化等とWEB関連のことを発信しています。その他にもデザインとかSEOについても分かる範囲でやっていきます。"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `${"https://leeks.dev"}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: `${"LEEKS.dev"}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: "LEEKS.devは中の人(cupmen)が趣味で運営してるサイトです。2022年時点では、技術関連のことをメインに普段使える作業自動化等とWEB関連のことを発信しています。その他にもデザインとかSEOについても分かる範囲でやっていきます。"
            })
        ]
    });
    // 記事位リスト
    const ArticleList = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_list)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().home_h2),
                children: "Home"
            }),
            allPostsData.slice(offset, offset + perPage).map(({ id , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                    href: `/article/${id}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_parts__WEBPACK_IMPORTED_MODULE_5__/* .Article */ .d2, {
                            title: data.title,
                            janle: data.janle,
                            category: data.category,
                            view_janle: data.view_janle,
                            view_category: data.view_category,
                            date: data.date,
                            detail: data.detail
                        })
                    })
                }, data.date)
            )
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            HTMLHead,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: [
                    ArticleList,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_paginate__WEBPACK_IMPORTED_MODULE_3___default()), {
                        previousLabel: "<",
                        nextLabel: ">",
                        breakLabel: "...",
                        pageCount: Math.ceil(allPostsData.length / perPage),
                        marginPagesDisplayed: 2,
                        pageRangeDisplayed: 5,
                        onPageChange: handlePageChange,
                        containerClassName: `${(styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().pagelink_div)}`,
                        pageLinkClassName: `${(styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().pagelink)}`,
                        activeLinkClassName: `${(styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().active_pagelink)}`,
                        previousLinkClassName: `${(styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().pagelink)}`,
                        nextLinkClassName: `${(styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().pagelink)}`,
                        disabledLinkClassName: `${(styles_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_12___default().notfound_pagelink)}`
                    })
                ]
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_7___default().readdirSync(postsDirectory);
    const PostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/, "");
        const objectID = id;
        const fullPath = path__WEBPACK_IMPORTED_MODULE_8___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_7___default().readFileSync(fullPath, "utf8");
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_9___default()(fileContents);
        return {
            id,
            objectID,
            ...matterResult
        };
    });
    const allPostsData = (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getSortedPostsData */ .ld)();
    const searchClient = algoliasearch__WEBPACK_IMPORTED_MODULE_6___default()("AG783LQQY3", "73d4d320e08b008e617f4e1ef1734ae5");
    const searchIndex = searchClient.initIndex("blogs");
    if (true) {
        await searchIndex.saveObjects(PostsData, {
            autoGenerateObjectIDIfNotExist: false
        });
    }
    // SSG
    return {
        props: {
            allPostsData
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 5368:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 8970:
/***/ ((module) => {

module.exports = require("algoliasearch");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7929:
/***/ ((module) => {

module.exports = require("react-instantsearch-dom");

/***/ }),

/***/ 9012:
/***/ ((module) => {

module.exports = require("react-loading-skeleton");

/***/ }),

/***/ 4108:
/***/ ((module) => {

module.exports = require("react-modern-drawer");

/***/ }),

/***/ 9700:
/***/ ((module) => {

module.exports = require("react-paginate");

/***/ }),

/***/ 3662:
/***/ ((module) => {

module.exports = require("react-twitter-embed");

/***/ }),

/***/ 9294:
/***/ ((module) => {

module.exports = require("react-youtube");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,738,943,776], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();