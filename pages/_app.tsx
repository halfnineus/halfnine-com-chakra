import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, height=device-height, width=device-width' />
          <meta name="robots" content="all" />

          <meta name="description" content="Full-service product developoment with ochoa.pro Providing services from software, hardware and mechanical engineering. And product manufacturing." />
          <meta name="title" content="International Product Development, Design and Production" />
          <meta name="keywords" content={'Development, Design, Manufacturing'} />

          {/* Analytics */}
          {/* <React.Fragment>
            <script src="https://pastebin.mozilla.org/NhkcUGsQ/raw" defer></script>
          </React.Fragment> */}

          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ochoa.pro" />
          <meta property="og:url" content="https://ochoa.pro/" />
          <meta property="og:title" content="International Product Development, Design and Production" />
          <meta property="og:description" content="Full-service product developoment with ochoa.pro Providing services from software, hardware and mechanical engineering. And product manufacturing." />
          <meta property="og:image" content="http://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/3Y9vjqM/meta.png" />
          <meta property="og:image:secure_url" content="https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/3Y9vjqM/meta.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ochoa.pro/" />
          <meta property="twitter:title" content="International Product Development, Design and Production" />
          <meta property="twitter:description" content="Full-service product developoment with ochoa.pro Providing services from software, hardware and mechanical engineering. And product manufacturing." />
          <meta property="twitter:image" content="https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/3Y9vjqM/meta.png" />

        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider >
  )
}
