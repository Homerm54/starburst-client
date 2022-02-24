import styled, { css } from "styled-components";
import { HorizontalDividerProps } from "./types";

const baseDividerStyle = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1.5715;
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
`;

const dividerForText = (fullWidth = false) => css`
  position: relative;
  top: 50%;
  width: ${fullWidth ? '95%' : '50%' };
  border-top: 1px solid transparent;
  border-top-color: ${({ theme }) => theme.palette.divider};
  border-bottom: 0;
  transform: translateY(50%);
  content: "";
`;

const HorizontalDivider = styled.div`
  ${baseDividerStyle}

  display: flex;
  clear: both;
  width: auto;
  margin: 24px 0;
`;

const VerticalDivider = styled.div`
  ${baseDividerStyle}
  position: relative;
  top: -0.06em;
  display: inline-block;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
  border-top: 0;
  border-left: 1px solid ${({ theme }) => theme.palette.divider};
`;

/**
 * The ::before and ::after pseudo classes adds the horizontal line in the center,
 * and the text is placed as requested via the props.
 */
const HorizontalDividerText = styled.div<HorizontalDividerProps>`
  display: flex;
  margin: 16px 0;
  font-weight: 500;
  white-space: nowrap;
  text-align: ${({ orientation }) => orientation};
  border-top: 0;

  ::before {
    ${({ orientation }) => (orientation !== 'left' ? dividerForText(orientation !== 'center') : '') };
  }

  ::after {
    ${({ orientation }) => (orientation !== 'right' ? dividerForText(orientation !== 'center') : '') };
  }
`;

const TextDivider = styled.span`
  display: inline-block;

  /* X padding to avoid rendering divider lines that "touches" the text */
  padding: 0 ${({ theme }) => theme.spacing(2)}px;
`;

export { HorizontalDivider, VerticalDivider, TextDivider, HorizontalDividerText };