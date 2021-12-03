import React from 'react';
import { ThemeTogglerContainer, Slider } from './styled-components/ThemeToggler.styled';

function ThemeToggler(props) {
    const { handleDarkMode } = props;

    return (
    <ThemeTogglerContainer>
        <label>
            <input type = "checkbox" onChange = {handleDarkMode}>
            </input>
            <Slider/>
        </label>
    </ThemeTogglerContainer>
    )
}

export default ThemeToggler;