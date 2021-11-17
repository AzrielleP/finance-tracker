import styled, { css } from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style.styled";
import { Bold } from "./Text.styled";


export const SidebarRadio = styled.input`
    display: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
`

export const FormRadio = styled.input`
    display: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;

    &:checked + label {
        background-color: ${generalColors.white};
        color: ${lightTheme.blue};
        border-color: ${lightTheme.blue};
    }
`
export const FormLabel = styled.label`
    flex: 1;
    padding: 0.25em 0.5em;
    border: 0.5px solid ${generalColors.darkAccent};
    border-radius: 5px;
    background-color: ${generalColors.lightAccent};
    color: ${generalColors.darkAccent};
`

const inputStyles = css`
    width: 60vw;
    font-family: 'Open Sans', sans-serif;
    background-color: ${generalColors.white};
    outline: 0;
    border-width: 0 0 0.5px;
    border-color: ${generalColors.darkAccent};

    @media screen and (min-width: 768px) {
        width: 30em;
    }

    @media screen and (min-width: 1024px) {
        width: 28em;
        font-size: 16px;
    }
`

export const FormInput = styled.input `${inputStyles}`

export const FormSelect = styled.select`${inputStyles}`

export const FormButton = styled.button`
    margin: 0.5em;
`