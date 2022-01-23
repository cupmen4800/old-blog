import { AppProps } from "next/app"
export type postDataResult = {
  id:string
  content: string
  data: {title:string,date:string, janle:string, view_janle:string, category:string, view_category:string, detail:string, sns_detail: string,}
  isEmpty: boolean
  excerpt: string
  orig: string
}

export type fileNameId = {
  params:{
    id: string
  }
}

export type postData = {
  id:string
  contentHtml:string
  title:string
  date:string
  janle:string
  view_janle:string
  category:string
  view_category:string
  detail:string
  sns_detail: string
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