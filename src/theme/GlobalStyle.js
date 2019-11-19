import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Manjari:400,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

    *,*::before,*::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    html {
      font-size: 62.5%;
      @media only screen and (min-width: 768px) {
        font-size: 68.75%;
      }
      @media only screen and (min-width: 1024px) {
        font-size: 75%;
      }
      @media only screen and (min-width: 1200px) {
        font-size: 87.5%;
      }
    }

    body {
        font-size: 1.6rem;
        font-family: 'Manjari', sans-serif;
        background-color: #ffffff;
        padding-top: 0;
    }
`;
