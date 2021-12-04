import styled from "styled-components";

export const ChartContainer = styled.div`
	min-height: 30vh;

	div {
		margin: auto;
		max-width: 20em;
	}

	@media screen and (min-width: 1024px) {
		div {
			padding: 1em;
		}
	}
`;
