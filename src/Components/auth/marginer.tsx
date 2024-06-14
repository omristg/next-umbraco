import React from "react";
import styled from "styled-components";

type Props = {
	margin: number | string;
	direction?: "horizontal" | "vertical";
};

const HorizontalMargin = styled.span<Props>`
	display: flex;
	width: ${({ margin }) =>
		typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<Props>`
	display: flex;
	height: ${({ margin }) =>
		typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer(props: Props) {
	const { direction } = props;

	if (direction === "horizontal") return <HorizontalMargin {...props} />;
	else {
		return <VerticalMargin {...props} />;
	}
}

Marginer.defaultProps = {
	direction: "horizontal",
};

export { Marginer };
