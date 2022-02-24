import styled from "styled-components";
import { TabHeaderStyleProps, TabItemStyleProps, TabPanelStyleProps } from "./types";

const TabItemLabel = styled.span`
  margin: 0 ${({ theme }) => theme.spacing(1.25)}px;
`;

const TabItemStyle = styled.div<TabItemStyleProps>`
  font-weight: ${({ $isActive }) => ( $isActive ? 'bold' : 'normal' )};
  border: 2px solid transparent;
  border-radius: 3px;
  border-bottom-color: ${({ $isActive, theme }) => (
    $isActive
      ? theme.palette.primary.main
      : theme.palette.grey[300]
  )};
  
  &:hover {
    border-bottom-color: ${({ $isActive, theme }) => (
    $isActive
      ? theme.palette.common.black
      : theme.palette.grey[500]
  )};
      
    background-color: ${({ $isActive, theme }) => (
    $isActive
      ? 'none'
      : theme.palette.action.disabledBackground
  )};
  }
`;

const TabHeaderStyle = styled.div<TabHeaderStyleProps>`
  display: flex;
  width: 100%;
  justify-content: ${({ $alignment }) => $alignment};
  
  /* TODO: This scroll should be styled with a button, and on click */
  overflow-x: auto;

  & > ${TabItemStyle} {
    padding: ${({ theme }) => theme.spacing(0.25)}px ${({ theme }) => theme.spacing(1)}px;
  }
`;

const TabGroupStyle = styled.div``;

const TabPanelStyle = styled.div<TabPanelStyleProps>`
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
`;

export { TabGroupStyle, TabItemStyle, TabPanelStyle, TabHeaderStyle, TabItemLabel };