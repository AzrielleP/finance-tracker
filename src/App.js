import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/Main/Main";


// Styled Components
import { GlobalStyle } from "./styled-components/GlobalStyle";
import { AppContainer } from "./styled-components/Default.styled";
import { ThemeProvider } from "styled-components";
import * as ThemeColors from "./styled-components/ThemeColors.styled";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [option, setOption] = useState("transactions");
	const handleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	const handleOptionChange = (event) => {
		let value = event.target.value;
		setOption(value);
	};

	return (
		<>
			<ThemeProvider theme={isDarkMode ? ThemeColors.dark : ThemeColors.light}>
				<GlobalStyle />

				<AppContainer>
					<Sidebar
						option = {option}
						handleOptionChange = {handleOptionChange}
					/>
					<Main
						handleDarkMode = {handleDarkMode}
						isDarkMode = {isDarkMode}
						option = {option}
					/>
					
				</AppContainer>
			</ThemeProvider>
		</>
	);
}

export default App;
