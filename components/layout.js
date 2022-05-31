import Head from 'next/head'

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    </>
  )
}