import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
    font-family: 'Open Sans Condensed', sans-serif;
    margin: 0;
    /* padding : 20px 40px; */

        @media (max-width : 800px) {
        padding: 8px;
        }

    }
    a {
    text-decoration: none;
    color: black;
    }

    * {
    box-sizing: border-box;
    }
`;
