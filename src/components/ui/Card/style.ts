import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  background-color: ${props => props.theme.palette.primaryDark.main};
  border-radius: ${props => props.theme.borderRadius}px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Body = styled.div`

`;

const Footer = styled.div`
  display: flex;
  justify-content: end;
`;

export { Container, Header, Body, Footer };