import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { MainLayout } from '../components'
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, height=device-height, width=device-width' />
          <meta name="robots" content="all" />
          {/* Analytics */}


          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Ochoa" />
          <meta property="og:url" content="https://ochoa.pro/" />
          <meta property="og:title" content="International Product Development, Design and Production" />
          <meta property="og:description" content="Full-service product development with Ochoa, Providing services from software, hardware and mechanical engineering. And electronics manufacturing." />
          <meta property="og:image" content="https://ochoa.pro/perma/metatag.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ochoa.pro/" />
          <meta property="twitter:title" content="International Product Development, Design and Production" />
          <meta property="twitter:description" content="Full-service product development with Ochoa, Providing services from software, hardware and mechanical engineering. And electronics manufacturing." />
          <meta property="twitter:image" content="https://ochoa.pro/perma/metatag.png" />

        </Head>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider >
  )
}
