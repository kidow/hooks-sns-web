import Link from 'next/link'
import Layout from '../components/Layout'
import Head from 'next/head'

export default () => {
  return (
    <>
      <Head>
        <title>Kidobird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <Layout>
        <Link href="/about">about</Link>
        <div>Hello, Next!</div>
      </Layout>
    </>
  )
}
