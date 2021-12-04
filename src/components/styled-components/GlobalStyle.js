import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        background: ${({ theme }) => theme.background};
    }

    h1, h2 {
        font-family:'Poppins', sans-serif;
        font-weight: 700;
        letter-spacing: 0%;
    }

    p, label {
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
        cursor: pointer;
    }

    @media screen and (min-width: 1024px) {
        p {
            font-size: 18px;
        }
    }
`;
