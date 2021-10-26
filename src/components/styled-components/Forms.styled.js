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


    ${'' /* &:checked + label{
        border-bottom: 5px solid ${lightTheme.blue};
    }; */}

    @media screen and (min-width: 768px) {
    }
`


