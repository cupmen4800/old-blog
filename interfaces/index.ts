import { AppProps } from "next/app"
export type postDataResult = {
  objectID: string;
  id: string
  content: string
  data: {title:string, date:string, janle:string, view_janle:string, category:string, view_category:string, detail:string}
  isEmpty: boolean
  excerpt: string
  orig: string
}

export type fileNameId = {
  params:{
    id: string
  }
}

//ここからID抽出できそう
export type postData = {
  id:string
  Content: string
  title:string
  date:string
  janle:string
  view_janle:string
  category:string
  view_category:string
  detail:string
}

export type Props = {
  props:{
    allPostsData:postDataResult
  }
}

export type PropsAllPostsData = {
  props:{
    allPostsData:postDataResult
  }
}

type PageProps = {
  title: string
  logData: {
    screenName: string
  }
}
export type AppPageProps = Omit<AppProps<PageProps>, "pageProps"> & {
  pageProps: PageProps
}

export type staticPaths = {
  paths:fileNameId[]
  fallback:boolean
}
export type staticProps = {
  props:{
      postData:postData
  }
}