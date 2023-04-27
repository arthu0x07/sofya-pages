import { createGlobalStyle } from "styled-components";
import { theme } from "./DefaultTheme";

export const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 62.5%; //1rem = 10px && 1.6rem = 16px...
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
        background-color: ${() => theme.colors.background};
        overflow-x: hidden;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;
