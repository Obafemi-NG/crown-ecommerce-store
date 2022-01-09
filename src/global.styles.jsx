// import styled from "styled-components";
// import { GlobalStyleComponent } from "styled-components";
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding : 20px 40px;

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
`