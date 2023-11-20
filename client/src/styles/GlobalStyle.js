import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    body {
        cursor: none;
        -ms-overflow-style: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;
