import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
        <link href="https://fonts.googleapis.com/css2?family=Oxygen&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="goog-anal-1" src="https://www.googletagmanager.com/gtag/js?id=G-XPLNM2KYK7" />
        <Script id="goog-anal-2">
          {`window.dataLayer = window.dataLayer || [];`}
          {`function gtag(){dataLayer.push(arguments);`}
          {`gtag('js', new Date());`}

          {`gtag('config', 'G-XPLNM2KYK7');`}
        </Script>
      </body>
    </Html>
  )
}