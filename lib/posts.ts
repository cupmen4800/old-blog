import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import {fileNameId, postData, postDataResult} from 'interfaces'
const postsDirectory= path.join(process.cwd(), '/posts')

//SSGのところで出てくるやつ
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

// Array Make
export const getPostData = async (id:string):Promise<postData> => {
    const Terms = fs.readFileSync(process.cwd() + `/posts/${id}.md`, 'utf8')
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(Terms)
    const Content = matterResult.content
    const title = matterResult.data.title
    const date = matterResult.data.date
    const janle = matterResult.data.janle
    const view_janle = matterResult.data.view_janle
    const category = matterResult.data.category
    const view_category = matterResult.data.view_category
    const detail = matterResult.data.detail
    return {
        id,
        Content,
        title,
        date,
        janle,
        view_janle,
        category,
        view_category,
        detail,
    }
}