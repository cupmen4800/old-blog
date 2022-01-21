import DefaultErrorPage from 'next/error'

export default function Home() {
  return (
    <DefaultErrorPage statusCode={418} />
  )
}