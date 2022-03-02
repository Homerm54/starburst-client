import styled from "styled-components";
import { RowStyleProps } from "./types";

const ColStyle = styled.div`
  /* TODO: */
`;

const RowStyle = styled.div<RowStyleProps>`
  box-sizing: border-box;
  display: flex;
  margin-top: -${({ $spacing }) => $spacing.y}px;
  width: calc(100% + ${({ $spacing }) => $spacing.x}px);
  margin-left: -${({ $spacing }) => $spacing.y}px;
  max-width: 100%;

  & > ${ColStyle} {
    padding-left: ${({ $spacing }) => $spacing.x}px;
    padding-top: ${({ $spacing }) => $spacing.y}px;
  }
}
`;

export { RowStyle, ColStyle };