import Console from "lib/Console";
import styled, { css } from "styled-components";
import { ButtonProps, TypeStyleObject } from "./types";

const types: TypeStyleObject = {
  primary: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    link: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    outlined: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    text: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,
  },
  secondary: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    link: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    outlined: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    text: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,
  },
  danger: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    link: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    outlined: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    text: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,
  },
  info: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    link: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    outlined: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    text: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,
  },
  sucess: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    link: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    outlined: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,

    text: css<ButtonProps>`
				background-color: ${({ theme }) => theme.colors.secondary.normal}
			`,
  },
  unstyled: {
    filled: css`
				background: none;
				color: inherit;
				border: none;
				padding: 0;
				font: inherit;
				cursor: pointer;
				outline: inherit;
			`,
    link: css`
				background: none;
				color: inherit;
				border: none;
				padding: 0;
				font: inherit;
				cursor: pointer;
				outline: inherit;
			`,

    outlined: css`
				background: none;
				color: inherit;
				border: none;
				padding: 0;
				font: inherit;
				cursor: pointer;
				outline: inherit;
			`,

    text: css`
				background: none;
				color: inherit;
				border: none;
				padding: 0;
				font: inherit;
				cursor: pointer;
				outline: inherit;
			`,
  }
};

const generateStyle = ({ variant = 'filled', mode: type = 'primary', loading, disabled }: ButtonProps) => {
  Console.log(`Style function called with the following values: 
		- variant: ${variant} 
		- type: ${type}
	`);

  return types[type][variant];
};

const ButtonContainer = styled.button<ButtonProps>`
	padding: 0.25rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;

  border-radius: 4px;
  border-style: solid;
  border-width: 2px;

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
