import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style";


export const LargeHeader = styled.h1`
	${'' /* font-size: 48px; */}
    font-size: 18px;
`
export const Header = styled.h2`
	font-size: 16px 
`
export const Subtitle = styled.p`
    font-weight: bold;
    ${'' /* font-size: 28px; */}
    font-size: 14px;
`
export const SubtitleLight = styled.p`
    font-weight: thin;
    font-size: 14px;
`
export const Bold = styled.p`
	font-weight: bold;
	${'' /* font-size: 18px; */}
	font-size: 12px;
	letter-spacing: 4%;
	color: ${({color}) => color };
`
export const Small = styled.p`
    font-size: 10px;
    letter-spacing: 10%;
`