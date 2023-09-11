import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
  }

  button {
    border: none;
    background: none;
  }
`

export default GlobalStyle
