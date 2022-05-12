import React from "react";
import ThemeToggler from "./ThemeToggler/ThemeToggler";

// Styled Components
import { FixedContainer, FlexHeader } from "../../../../styled-components/Default.styled";
import { OptionContainer } from "./Settings.styled";
import { Large, Main }  from "../../../../styled-components/Text.styled";

function Settings(props) {
    const { handleDarkMode } = props;
    return (
        <div>
            <FixedContainer>
                <FlexHeader>
                    <Large>Settings</Large>
                </FlexHeader>
            </FixedContainer>
            <OptionContainer justifySmall = "space-between">
                <Main>Toggle Dark Mode</Main>
                <ThemeToggler handleDarkMode={handleDarkMode} />
            </OptionContainer>
        </div>
        )
};

export default Settings;