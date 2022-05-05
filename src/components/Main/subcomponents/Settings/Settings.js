import react from "react";
import ThemeToggler from "./ThemeToggler/ThemeToggler";

function Settings(props) {
    const { handleDarkMode } = props;
    return (
        <div>
            <ThemeToggler handleDarkMode={handleDarkMode} />
        </div>
        )
};

export default Settings;