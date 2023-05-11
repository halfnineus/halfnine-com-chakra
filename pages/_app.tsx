import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { MainLayout, DefaultSEO, Theme } from '../components'
import React, { useEffect } from 'react'

// Analytics
import { hotjar } from 'react-hotjar'
import * as gtag from '../lib/gtag'
import router from 'next/router'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps) {
  // Analytics
  useEffect(() => {
    hotjar.initialize(3273893, 6)
  }, [])
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  // Analytics
  return (
    <ChakraProvider theme={Theme}>
      <MainLayout>
        <DefaultSEO />
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, height=device-height, width=device-width' />
          <meta name="author" content="halfnine.com" />
        </Head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-VEH18EPWTN'
          strategy='afterInteractive'
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VEH18EPWTN');
          `}
        </Script>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}