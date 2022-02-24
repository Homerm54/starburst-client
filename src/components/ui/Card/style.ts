import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.palette.primaryDark[800]};
  border-radius: ${props => props.theme.borderRadius}px;

  width: fit-content;
  min-width: 300px;
`;

const HeaderContainer = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;

  border-bottom-color: ${({ theme }) => theme.palette.divider};
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

const HeaderTitle = styled.div`
  display: inline-block;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: auto;

  font-weight: bold;
  font-size: 18px;
`;

const HeaderOptions = styled.div`
  margin-left: auto;
`;

const Body = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const FooterContainer = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;

  border-top-color: ${({ theme }) => theme.palette.divider};
  border-top-width: 1px;
  border-top-style: solid;
`;

const FooterTool = styled.div<{ showDivider: boolean }>`
  flex: 1;
  text-align: center;

  border-right-color: ${({ theme, showDivider }) => showDivider ? theme.palette.divider : 'transparent'};
  border-right-width: 1px;
  border-right-style: solid;

  & > * {
    margin: auto;
  }
`;

const Header = {
  Container: HeaderContainer,
  Title: HeaderTitle,
  Options: HeaderOptions,
};

const Footer = {
  Container: FooterContainer,
  Tool: FooterTool,
};

export { Container, Header, Body, Footer };