import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, height=device-height, width=device-width' />
          <meta name="robots" content="all" />
        </Head>
        {/* <meta name="description" content={`Informacion sobre el ${title}`} /> */}
        {/* <meta name="keywords" content={`${title}`} /> */}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
