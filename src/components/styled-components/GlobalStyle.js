import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }

    h1, h2 {
        font-family:'Poppins', sans-serif;
        font-weight: 700;
        letter-spacing: 0%;
    }

    p {
        font-family: 'Open Sans', sans-serif
    }

    button {
        padding: 0;
        border: none;
        outline: none;
        background: none;
    }
`