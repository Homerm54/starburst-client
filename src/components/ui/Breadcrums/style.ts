import styled from "styled-components";
import { BreadcrumItemStyle } from "./types";

const BreadcrumContainer = styled.div`
  margin: ${({ theme }) => `${theme.spacing(1.25)}px 0`};
  display: flex;
  color: ${({ theme }) => theme.palette.grey[400]};

  line-height: 1.5;
  letter-spacing: 0.00938em;
  maxWidth: fit-content;
`;

const BreadcrumItem = styled.div.attrs({ role: 'button' })<BreadcrumItemStyle>`
  color: ${({ theme, $isActive }) => $isActive ? theme.palette.text.primary : 'inherit'};
  cursor: ${({ $isActive }) => $isActive ? 'default' : 'pointer'};

  :hover {
    text-decoration: ${({ $isActive }) => $isActive ? 'none' : 'underline'};
  }
`;

const FordwardSlashStyle = styled.span`
  margin: 0 ${({ theme }) => theme.spacing(0.75)}px;
`;

export { BreadcrumContainer, BreadcrumItem, FordwardSlashStyle };
