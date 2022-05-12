import styled from "styled-components";
import { FlexContainerBordered } from "../../../../styled-components/Default.styled";
import { generalColors } from "../../../../styled-components/ThemeColors.styled";

export const AccountContainer = styled(FlexContainerBordered)`
	justify-content: space-between;
	margin: 0.5em 0;
	padding: 0.75em 7vw;

	p:nth-child(2) {
		color: ${({ value }) => (value < 0 ? generalColors.red : generalColors.blue)};
	}
`;
