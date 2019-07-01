import Head from 'next/head'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'

const Kidobird = ({ Component, store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

Kidobird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
}

export default withRedux((initialState, options) => {
  const middlewares = []
  const enhancer = compose(
    applyMiddleware(...middlewares),
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
  const store = createStore(reducer, initialState, enhancer)
  return store
})(Kidobird)
