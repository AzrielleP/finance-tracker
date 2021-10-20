import { createGlobalStyle } from 'styled-components';
import { generalColors } from './Themes-Style';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        height: 100vh;
        background: ${generalColors.white};
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
        text-align: left;
    }

    button {
        padding: 0;
        border: none;
        outline: none;
        background: none;
    }

    @media screen and (min-width: 1024px) {
        p {
            font-size: 18px;
        }
    }
`