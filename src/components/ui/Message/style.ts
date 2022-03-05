import styled, { css } from "styled-components";
import { MessageContainerStyleProps } from "./types";

const positions = {
  "top-left": css` top: 0; left: 0; `,
  "top-center": css` top: 0; left: 50%; transform: translateX(-50%);`,
  "top-right": css` top: 0; right: 0`,

  "left-center": css` left: 0; top: 50%; transform: translateY(-50px); `,
  "right-center": css` right: 0; top: 50%; transform: translateY(-50px); `,

  "bottom-left": css` bottom: 0; left: 0; `,
  "bottom-center": css` bottom: 0; left: 50%; transform: translateX(-50%);`,
  "bottom-right": css` bottom: 0; right: 0`,
};

const MessageContainer = styled.div<MessageContainerStyleProps>`
  position: fixed;
  margin: ${({ theme }) => theme.spacing(1)}px;
  padding: ${({ theme }) => theme.spacing(0.5)}px ${({ theme }) => theme.spacing(1.5)}px;
  z-index: ${({ theme }) => theme.zIndex.message};
  color: ${({ theme }) => theme.palette.text.primary};

  background-color: ${props => props.theme.palette.primaryDark[800]};
  border-radius: ${({ theme }) => theme.borderRadius}px;

  /* Position derived from state */
  ${({ $position }) => positions[$position]}
`;

export { MessageContainer };
