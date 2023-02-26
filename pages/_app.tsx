import '@/styles/index.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'


function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body>
        <div id="root">
          <Header />
          <main className='container'>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </body>
    </>
  )
}

export default App
