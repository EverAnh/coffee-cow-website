import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="goog-anal-1" src="https://www.googletagmanager.com/gtag/js?id=G-XPLNM2KYK7" />
      <Script id="goog-anal-2">
        {`window.dataLayer = window.dataLayer || [];`}
        {`function gtag(){dataLayer.push(arguments);`}
        {`gtag('js', new Date());`}

        {`gtag('config', 'G-XPLNM2KYK7');`}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
