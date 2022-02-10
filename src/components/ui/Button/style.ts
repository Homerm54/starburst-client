import styled from "styled-components";

type BaseProps = {
	loading?: boolean;
};

const BaseButtonContainer = styled.button<BaseProps>`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: ${({ loading }) => (loading ? 'default !important' : 'pointer')};
	outline: inherit;
	
 	display: flex;
  align-items: center;
  white-space: nowrap;
	color: ${({ loading }) => (loading ? '#6c757d !important;' : 'unset')};

	&[disabled] {
		color: #6c757d !important;
		cursor: default;
	}
`;

export { BaseButtonContainer };
