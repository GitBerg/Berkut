import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

body {
  font-family: sans-serif;
  background-color: #dce6f8;
  }

#__next{
    display:flex;
    min-height: 100vh;
    flex-direction: column
  }

img {
  max-width: 100%;
  height: auto;
}
`


const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
