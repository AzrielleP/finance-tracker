import styled from "styled-components";
import { handleColorTransType } from "../../../../styled-components/ThemeColors.styled";

export const LargeNumberContainer = styled.div`
	flex: 1;
	text-align: center;

	p:nth-child(2) {
		color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};
	}
`;