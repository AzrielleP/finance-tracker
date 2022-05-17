import styled from "styled-components";
import { FlexContainer } from '../../../../styled-components/Default.styled';

export const DatePickerContainer = styled(FlexContainer) `
    button:nth-child(1) {
        margin: 0 1em 0 0;
    }

    button:nth-child(3) {
        margin: 0 0 0 1em;
    }

`

export const ArrowButton = styled.button`
    color: ${({ theme }) => theme.text};

    &:hover, &:focus, &:active {
        box-shadow: none;
    }
    
    i {
        font-size: 14px; 

        @media screen and (min-width: 1024px) {
        font-size: 36px;
        }
    }
`;