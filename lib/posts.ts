import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import {fileNameId, postData, postDataResult} from 'interfaces'
const postsDirectory= path.join(process.cwd(), '/posts')

export const getSortedPostsData = ():postDataResult => {
    const fileNames =  fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)
        return {
            id,
            ...matterResult
        }
    })
    return JSON.parse(JSON.stringify(allPostsData.sort((a, b) => {
        if (a.data.date < b.data.date) {
            return 1
        } else {
            return -1
        }
    })))
} 

export const getAllPostIds = (): Array<fileNameId> => {
    const fileNames = fs.readdirSync(postsDirectory)
    
    return fileNames.map((fileName):fileNameId => {
        return {
            params:{
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export const getPostData = async (id:string):Promise<postData> => {

    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
    const contentHtml = processedContent.toString()
    const title = matterResult.data.title
    const date = matterResult.data.date
    const janle = matterResult.data.janle
    const view_janle = matterResult.data.janle
    const category = matterResult.data.category
    const view_category = matterResult.data.category
    const detail = matterResult.data.detail
    const sns_detail = matterResult.data.sns_detail
    return {
        id,
        contentHtml,
        title,
        date,
        janle,
        view_janle,
        category,
        view_category,
        detail,
        sns_detail
    }
}