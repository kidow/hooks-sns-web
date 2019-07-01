import Head from 'next/head'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

const Kidobird = ({ Component }) => {
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
        <Component />
      </Layout>
    </>
  )
}

Kidobird.propTypes = {
  Component: PropTypes.elementType
}

export default Kidobird
