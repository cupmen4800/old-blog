"use strict";
exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Le": () => (/* binding */ getAllPostIds),
/* harmony export */   "ld": () => (/* binding */ getSortedPostsData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "/posts");
//SSGのところで出てくるやつ
const getSortedPostsData = ()=>{
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        return {
            id,
            ...matterResult
        };
    });
    return JSON.parse(JSON.stringify(allPostsData.sort((a, b)=>{
        if (a.data.date < b.data.date) {
            return 1;
        } else {
            return -1;
        }
    })));
};
const getAllPostIds = ()=>{
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
};
// Array Make
const getPostData = async (id)=>{
    const Terms = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(process.cwd() + `/posts/${id}.md`, "utf8");
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(Terms);
    const Content = matterResult.content;
    const title = matterResult.data.title;
    const date = matterResult.data.date;
    const janle = matterResult.data.janle;
    const view_janle = matterResult.data.view_janle;
    const category = matterResult.data.category;
    const view_category = matterResult.data.view_category;
    const detail = matterResult.data.detail;
    return {
        id,
        Content,
        title,
        date,
        janle,
        view_janle,
        category,
        view_category,
        detail
    };
};


/***/ })

};
;