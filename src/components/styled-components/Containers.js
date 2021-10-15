import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style";

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({justify}) => justify};
`