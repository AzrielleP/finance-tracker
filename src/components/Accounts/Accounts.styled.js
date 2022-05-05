import styled from "styled-components";
import { generalColors } from "../../styled-components/ThemeColors.styled";
import { FlexContainer } from "../../styled-components/Default.styled";
import { handleColorTransType } from "../../styled-components/helper-styled";

export const AccountTotalContainer = styled.div`
	width: 100%;
	border-bottom: 0.5px solid ${({ theme }) => theme.border};

	div {
		padding-bottom: 1em;
		width: 100%;
	}

	p {
		color: ${({ type }) => handleColorTransType(type)};
	}
`;
export const AccountContainer = styled(FlexContainer)`
	justify-content: space-between;
	margin: 1.25em 0.5em 0 0.5em;

	${FlexContainer} {
		gap: 1em;
	}

	p {
		color: ${({ theme }) => theme.text};
	}
`;
export const Dot = styled.span`
	height: 10px;
	width: 10px;
	margin-right: 0.5em;
	background-color: ${({ color }) => (color < 0 ? generalColors.red : generalColors.blue)};
	border-radius: 50%;

	@media screen and (min-width: 768px) {
		height: 15px;
		width: 15px;
	}
`;
