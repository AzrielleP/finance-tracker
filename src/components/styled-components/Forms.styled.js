import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style.styled";
import { Bold } from "./Text.styled";


export const SidebarRadio = styled.input`
    display: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;

    & + label{
        padding: 1em 3em;
        border-bottom: 5px solid ${generalColors.lightAccent};
    }

    &:checked + label{
        border-bottom: 5px solid ${lightTheme.blue};
    };
`


