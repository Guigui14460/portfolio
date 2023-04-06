import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head key="global_head">
          {/* Global meta tags */}
          <meta charSet="UTF-8" />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge,chrome=1' />

          {/* Copyrights and site property */}
          <meta name="hostname" content={process.env.SITE_URL} />
          {/* <meta name="google-site-verification" content="" /> */}

          {/* Color theme */}
          <meta name="color-scheme" content="light" />
          {/* <meta name="color-scheme" content="dark light" /> */}
          <meta name="theme-color" content="#ffffff" />

          {/* Icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
        
          {/* PWA */}
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="breadcrumb-json-ld" />
          <div id="product-json-ld" />
        </body>
      </Html>
    )
  }
}
