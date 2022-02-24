import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';
import { StyledLinkProps } from "./types";

const StyledLink = styled(RouterLink)<StyledLinkProps>`
  text-decoration: none;
  color: ${({ theme, $active, $type }) => (
    ($active || $type === "primary")
      ? theme.palette.primary.main
      : theme.palette.text.primary
  )};

  :hover {
    text-decoration: none;
    color: ${({ theme, $active, $type }) => (
    ($active || $type === "primary")
      ? theme.palette.primary.dark
      : theme.palette.text.disabled
  )};
  }
`;

export { StyledLink };
