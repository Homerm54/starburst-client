import styled, { css } from "styled-components";
import { ButtonProps, ButtonStyleProps, SizeStyleObject, TypeStyleObject, VariantStyleObject } from "./types";

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
				background-color: ${({ theme }) => theme.palette.primary.dark};
				border-color: ${({ theme }) => theme.palette.primary.dark};

				:hover {
					background-color: ${({ theme }) => theme.palette.primary['800']};
					border-color: ${({ theme }) => theme.palette.primary['800']};
				}
			`,

    outlined: css<ButtonProps>`
				background-color: transparent;
				border-color: ${({ theme }) => theme.palette.text.primary};

        :hover {
					border-color: ${({ theme }) => theme.palette.primary.dark};
          background-color: ${({ theme }) => theme.palette.action.hover};
				}
			`,
    text: css<ButtonProps>`
				border: none;
				background-color: transparent;
				color: ${({ theme }) => theme.palette.primary.main};

        :hover {
					background-color: ${({ theme }) => theme.palette.action.hover};
				}
			`,
  },
  secondary: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.secondary.main};
				border-color: ${({ theme }) => theme.palette.secondary.main};

				:hover {
					background-color: ${({ theme }) => theme.palette.secondary.dark};
					border-color: ${({ theme }) => theme.palette.secondary.dark};
				}
			`,

    outlined: css<ButtonProps>`
				background-color: transparent;
				border-color: ${({ theme }) => theme.palette.secondary.main};
				color: ${({ theme }) => theme.palette.secondary.main};

        :hover {
					border-color: ${({ theme }) => theme.palette.secondary.dark};
          background-color: ${({ theme }) => theme.palette.action.hover};
				}
			`,
    text: css<ButtonProps>`
				border: none;
				background-color: transparent;
				color: ${({ theme }) => theme.palette.secondary.main};

        :hover {
					background-color: ${({ theme }) => theme.palette.action.hover};
				}
			`,
  },
  danger: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.error.main};
				border-color: ${({ theme }) => theme.palette.error.main};

				:hover {
					background-color: ${({ theme }) => theme.palette.error.dark};
					border-color: ${({ theme }) => theme.palette.error.dark};
				}
			`,

    outlined: css<ButtonProps>`
				background-color: transparent;
				border-color: ${({ theme }) => theme.palette.error.main};
				color: ${({ theme }) => theme.palette.error.main};

        :hover {
					border-color: ${({ theme }) => theme.palette.error.light};
				}
			`,
    text: css<ButtonProps>`
				border: none;
				background-color: transparent;
				color: ${({ theme }) => theme.palette.error.main};

        :hover {
					background-color: ${({ theme }) => theme.palette.action.hover};
				}
			`,
  },
  info: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.info.dark};
				border-color: ${({ theme }) => theme.palette.info.dark};

				:hover {
					background-color: ${({ theme }) => theme.palette.info.main};
					border-color: ${({ theme }) => theme.palette.info.main};
				}
			`,

    outlined: css<ButtonProps>`
				background-color: transparent;
				border-color: ${({ theme }) => theme.palette.info.dark};
				color: ${({ theme }) => theme.palette.info.dark};

        :hover {
					border-color: ${({ theme }) => theme.palette.info.main};
				}
			`,
    text: css<ButtonProps>`
				border: none;
				background-color: transparent;
				color: ${({ theme }) => theme.palette.info.dark};

        :hover {
					background-color: ${({ theme }) => theme.palette.action.hover};
				}
			`,
  },
  success: {
    filled: css<ButtonProps>`
				background-color: ${({ theme }) => theme.palette.success.main};
				border-color: ${({ theme }) => theme.palette.success.main};

				:hover {
					background-color: ${({ theme }) => theme.palette.success.dark};
					border-color: ${({ theme }) => theme.palette.success.dark};
				}
			`,

    outlined: css<ButtonProps>`
				background-color: transparent;
				color: ${({ theme }) => theme.palette.success.main};
				border-color: ${({ theme }) => theme.palette.success.main};

        :hover {
					border-color: ${({ theme }) => theme.palette.success.dark};
				}
			`,
    text: css<ButtonProps>`
				border: none;
				background-color: transparent;
				color: ${({ theme }) => theme.palette.success.main};

        :hover {
					background-color: ${({ theme }) => theme.palette.action.hover};
				}
			`,
  },
  unstyled: {
    filled: unstyledCss,
    outlined: unstyledCss,
    text: unstyledCss,
  }
};

const disabledStyles: VariantStyleObject = {
  filled: css<ButtonProps>`
		border-color: transparent;
		color: ${({ theme }) => theme.palette.action.disabled};
		background-color: ${({ theme }) => theme.palette.action.disabledBackground};

		& > svg {
			color: ${({ theme }) => theme.palette.text.icon};
		}
	`,
  outlined: css<ButtonProps>`
		background-color: transparent;
		color: ${({ theme }) => theme.palette.action.disabled};
		border-color: ${({ theme }) => theme.palette.action.disabledBackground};

		& > svg {
			color: ${({ theme }) => theme.palette.text.icon};
		}
	`,
  text: css<ButtonProps>`
		background-color: transparent;
		border-color: transparent;
		color: ${({ theme }) => theme.palette.action.disabled};

		& > svg {
			color: ${({ theme }) => theme.palette.text.icon};
		}
	`,
};

const sizeStyles: SizeStyleObject = {
  large: css`
		font-size: ${({ theme }) => (theme.baseFontSize) + 2}px;
		padding: ${({ theme }) => theme.spacing(0.75)}px ${({ theme }) => theme.spacing(1)}px;
	`,
  medium: css`
		padding: ${({ theme }) => theme.spacing(0.5)}px ${({ theme }) => theme.spacing(0.75)}px;
	`,
  small: css`
		font-size: ${({ theme }) => (theme.baseFontSize) - 2}px;
		padding: ${({ theme }) => theme.spacing(0.25)}px ${({ theme }) => theme.spacing(0.25)}px;
	`,
};

const generateStyle = ({ $variant, $type, $loading, disabled }: ButtonStyleProps) => {
  // The disabled style takes precedence over the color mode style, only variant remains
  if ($loading || disabled) return disabledStyles[$variant];
  return types[$type][$variant];
};

const ButtonContainer = styled.button<ButtonStyleProps>`
  border-radius: ${props => props.$shape === 'round' ? '1000' : '4'}px;
  border-style: solid;
  border-width: 2px;

	width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};

	color: inherit;
	transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
							border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${generateStyle}
	${({ $size }) => sizeStyles[$size]};

	display: flex;
  align-items: center;
	justify-content: ${({ $fullWidth }) => $fullWidth ? 'center' : 'space-between'};
  white-space: nowrap;

	&[disabled] {
		cursor: default !important;
	}
`;

const ChildStyle = styled.span`
	margin: 0 ${({ theme }) => theme.spacing(0.75)}px;
`;

export { ButtonContainer, ChildStyle };
