import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style";


export const Bold = styled.p`
	margin: 0;
	font-weight: 700;
	font-size: 18px;
	letter-spacing: 4%;
	color: ${({color}) => color };
`

export const LargeHeader = styled.h1`
	font-size: 48px;
`

export const Header = styled.h2`
	font-size: 36px 
`