import Console from "lib/Console";
import styled, { css } from "styled-components";
import { ButtonProps, ButtonStyleProps, TypeStyleObject } from "./types";

const unstyledCss = css`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;

const types: TypeStyleObject = {
  primary: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
				border-color: ${({ theme }) => theme.palette.primary.main};

				:hover {
					background-color: ${({ theme }) => theme.palette.primary.dark};
					border-color: ${({ theme }) => theme.palette.primary.dark};
				}
			`,
    outlined: css<ButtonProps>`
				background-color: transparent;
				border-color: ${({ theme }) => theme.palette.primary.main};

        :hover {
					border-color: ${({ theme }) => theme.palette.primary.dark};
          background-color: rgba(220, 237, 200, 0.1);
				}
			`,

    link: css<ButtonProps>`
				background-color: transparent;
				border-color: none;
			`,

    text: css<ButtonProps>`
				background-color: transparent;
				border-color: transparent;

        :hover {
          background-color: rgba(220, 237, 200, 0.14);
				}
			`,
  },
  secondary: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    link: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    outlined: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    text: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,
  },
  danger: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    link: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    outlined: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    text: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,
  },
  info: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    link: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    outlined: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    text: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,
  },
  sucess: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    link: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    outlined: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,

    text: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.primary.main};
			`,
  },
  unstyled: {
    filled: unstyledCss,
    link: unstyledCss,
    outlined: unstyledCss,
    text: unstyledCss,
  }
};

const generateStyle = ({ $variant, $type: $mode, $loading, disabled }: ButtonStyleProps) => {
  Console.log(`Style function called with the following values: 
		- variant: ${$variant} 
		- mode: ${$mode}
	`);

  return types[$mode][$variant];
};

const ButtonContainer = styled.button<ButtonStyleProps>`
	padding: 0.25rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;

  border-radius: ${props => props.$shape === 'round' ? '1000' : '4'}px;
  border-style: solid;
  border-width: 1px;

	color: inherit;

	transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
							border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${generateStyle}

	display: flex;
  align-items: center;
  white-space: nowrap;

	&[disabled] {
		color: #6c757d !important;
		cursor: default !important;
	}
`;

export { ButtonContainer };
