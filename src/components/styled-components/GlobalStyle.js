import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        height: 100vh;
    }

    h1, h2 {
        font-family:'Poppins', sans-serif;
        font-weight: 700;
        letter-spacing: 0%;
    }

    p {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
    }

    button {
        padding: 0;
        border: none;
        outline: none;
        background: none;
    }
`