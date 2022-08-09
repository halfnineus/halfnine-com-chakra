import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { MainLayout } from '../components'
import React from 'react'
import DefaultSEO from '../components/defaultSEO'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <DefaultSEO />
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, height=device-height, width=device-width' />
          <meta name="author" content="ochoa.pro" />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}
