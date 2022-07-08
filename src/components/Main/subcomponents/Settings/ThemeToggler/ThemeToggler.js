import React from "react";
import { ThemeTogglerContainer, Slider } from "./ThemeToggler.styled";

function ThemeToggler(props) {
    const { handleDarkMode, isDarkMode } = props;
    return (
        <ThemeTogglerContainer>
            <label>
                <input type='checkbox' onChange={handleDarkMode} checked={isDarkMode}></input>
                <Slider />
            </label>
        </ThemeTogglerContainer>
    );
}

export default ThemeToggler;
