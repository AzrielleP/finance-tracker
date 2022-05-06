import styled from "styled-components";

export const ArrowButton = styled.button`
    margin: 0 1em;
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