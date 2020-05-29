import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Cormorant Infant Light'), local('CormorantInfant-Light'), url(https://fonts.gstatic.com/s/cormorantinfant/v8/HhyIU44g9vKiM1sORYSiWeAsLN9951w3zDAhQ5cd.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }


  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Raleway';
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  body {
    margin:0;
    background: #fff;
    overscroll-behavior: none;
    width: 100%;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  h1, h2, h3 {
    font-family: 'Cormorant Infant'
  }

  button {
    background: #ffffff00;
    border: 0;
    outline: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  
  a { 
    text-decoration: none;
    color: #393939
  }
`;

export default GlobalStyles;
