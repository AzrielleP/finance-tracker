import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style.styled";


export const LargeHeader = styled.h1`
	${'' /* font-size: 48px; */}
    font-size: 18px;

    @media screen and (min-width: 1024px) {
        font-size: 48px;
    }
`
export const Header = styled.h2`
	font-size: 16px 
`
export const Subtitle = styled.p`
    margin: 5px 0;
    font-weight: bold;
    font-size: 14px;
    text-align: ${({textAlign}) => textAlign};
    color: ${({color, amount}) => {
        if (amount < 0 ) { 
            return generalColors.red
        }
        return color;
    }};

    @media screen and (min-width: 1024px) {
        font-size: 24px;
    }
`
export const SubtitleLight = styled.p`
    font-weight: thin;
    font-size: 14px;

    @media screen and (min-width: 1024px) {
        font-size: 24px;
    }
`

export const Bold = styled.p`
	font-weight: bold;
	font-size: 12px;
	letter-spacing: 0.1em;
	color: ${({color, amount}) => {
        if (amount < 0 ) { 
            return generalColors.red
        }
        return color;
    }};
    text-align: ${({textAlign}) => textAlign};

    @media screen and (min-width: 1024px) {
        font-size: 18px;
    }
`
export const Small = styled.p`
    font-size: 10px;
    letter-spacing: 0.1em;
    text-align: ${({textAlign}) => textAlign};
    color: ${({color, amount}) => {
        if (amount < 0 ) { 
            return generalColors.red
        }
        return color;
    }};

    @media screen and (min-width: 1024px) {
        font-size: 16px;
    }
`

export const SmallOverflowingText = styled(Small)`
    overflow: hidden;
    text-overflow: ellipsis;
`