import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Layout from '../components/layout'

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <title>Kent Richards</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </Layout>
)

export default App
