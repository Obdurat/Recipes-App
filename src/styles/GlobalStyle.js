import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, sans-serif ;
    }

    body {
        background-color: ${({ theme }) => theme.main};
      * {
         color: ${({ theme }) => theme.fontColor};
      }
    }
`;

export default GlobalStyles;
