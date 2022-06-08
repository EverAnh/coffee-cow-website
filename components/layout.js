import Head from 'next/head'
import Script from 'next/script'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4c4c4c',
    },
    secondary: {
      main: '#e49b75',
    },
    background: {
      default: '#d3c4b3',
      paper: '#efe9e3',
    },
    text: {
      primary: '#222222',
    },
    error: {
      main: '#e92a35',
    },
    light: {
      main: '#d6d6d6',
    },
  },
  typography: {
    fontFamily: [
      'Source Sans Pro',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  }
});
theme = responsiveFontSizes(theme);

export default function Layout({children, title}) {
  return (
    <>
      <Head>
        <title>{title}</title>      
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
      </ThemeProvider>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-XPLNM2KYK7'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XPLNM2KYK7');
        `}
      </Script>
    </>
  )
}