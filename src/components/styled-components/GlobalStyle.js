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
        outline: none;
        cursor: pointer;
        background: none;
        background-clip: padding-box;
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;

        &:hover, &:focus {
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            transform: translateY(-1px);
        }

        &:active {
            box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
            transform: translateY(0);
        }
    }

    @media screen and (min-width: 1120px) {
        p {
            font-size: 18px;
        }
    }
`;
