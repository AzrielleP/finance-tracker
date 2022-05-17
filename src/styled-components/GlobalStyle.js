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

    p, label {
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        margin: 0; 

        @media screen and (min-width: 1024px) {
            font-size: 18px;
        }
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
`;
