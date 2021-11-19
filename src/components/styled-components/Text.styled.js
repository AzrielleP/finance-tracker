import styled from "styled-components";
import { generalColors, light, dark } from "./ThemeColors.styled";


export const LargeHeader = styled.h1`
    font-size: 20px;

    @media screen and (min-width: 1024px) {
        font-size: 36px;
    }
`

export const Subtitle = styled.p`
    margin: 5px 0;
    font-weight: bold;
    font-size: 14px;
    color: ${({color, amount}) => {
        if (amount < 0 ) { 
            return generalColors.red
        }
        return color;
    }};

    @media screen and (min-width: 1024px) {
        font-size: 22px;
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
        font-size: 16px;
    }
`
export const Small = styled.p`
    font-size: 10px;
    letter-spacing: 0.1em;
    color: ${({color, amount}) => {
        if (amount < 0 ) { 
            return generalColors.red
        }
        return color;
    }};
    text-align: ${({textAlign}) => textAlign};

    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }
`

export const SmallOverflowingText = styled(Small)`
    overflow: hidden;
    text-overflow: ellipsis;
`