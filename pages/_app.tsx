import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { MainLayout } from '../components'
import React from 'react'
import DefaultSEO from '../components/defaultSEO'
import theme from '../components/theme'
// Analytics
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
import router from 'next/router'

export default function MyApp({ Component, pageProps }: AppProps) {
  // Analytics
  useEffect(() => {
    hotjar.initialize(3220400, 6)
  }, [])
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  // Analytics
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <DefaultSEO />
        <Head>
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-3ZJNEBJRM6'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3ZJNEBJRM6');`
            }}
          ></script>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, height=device-height, width=device-width' />
          <meta name="author" content="ochoa.pro" />
          <meta name="robots" content="index,follow,noarchive,noimageindex" />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}
