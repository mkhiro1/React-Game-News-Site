import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: .5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
    }
  }

  body {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    color: #333;
  }

  a:active, a:visited {
  color: #333;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.3rem;
    padding: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 200%;
    color: #696969;
  }

  a {
    text-decoration: none;
  }
  
  img{
    display: block;
  }
  
`;

export default GlobalStyles;
