import React from "react";

// Styled Components
import { FixedContainer } from "../../styled-components/Default.styled";
import {
	SidebarContainer,
	SidebarSelectors,
	SidebarRadio,
} from "./Sidebar.styled";
import { Main } from "../../styled-components/Text.styled";

function Sidebar(props) {
	const { option, handleOptionChange } =
		props;
		
	return (
		<SidebarContainer>
			<FixedContainer>
				<SidebarSelectors justifySmall="space-around" option={option}>
					<SidebarRadio
						type="radio"
						name="sidebarOption"
						value="transactions"
						checked={option === "transactions"}
						onChange={handleOptionChange}
						id="transactions"
					/>
					<Main as="label" htmlFor="transactions">
						Transactions
					</Main>

					<SidebarRadio
						type="radio"
						name="sidebarOption"
						value="stats"
						checked={option === "stats"}
						onChange={handleOptionChange}
						id="stats"
					/>
					<Main as="label" htmlFor="stats">
						Stats
					</Main>

					<SidebarRadio
						type="radio"
						name="sidebarOption"
						value="accounts"
						checked={option === "accounts"}
						onChange={handleOptionChange}
						id="accounts"
					/>
					<Main as="label" htmlFor="accounts">
						Accounts
					</Main>

					<SidebarRadio
						type="radio"
						name="sidebarOption"
						value="settings"
						checked={option === "settings"}
						onChange={handleOptionChange}
						id="settings"
					/>
					<Main as="label" htmlFor="settings">
						Settings
					</Main>
				</SidebarSelectors>
			</FixedContainer>
		</SidebarContainer>
	);
}

export default Sidebar;
