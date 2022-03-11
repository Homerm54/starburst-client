import styled from "styled-components";

const MenuIcon = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;

const MenuText = styled.div``;

const MenuTool = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

const MenuContainer = styled.div<{ $fullWidth: boolean, $orientation: 'row' | 'col' }>`
  display: flex;
  flex-flow: ${({ $orientation }) => $orientation};
  justify-content: space-around;
  align-items: baseline;

  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'fit-content'};
  margin: ${({ theme }) => theme.spacing(1.25)}px 0;

  & > ${MenuTool} {
    margin: 0 ${({ theme }) => theme.spacing(2)}px;
  }
`;

const MenuStyle = {
  Icon: MenuIcon,
  Text: MenuText,
  Tool: MenuTool,
  Container: MenuContainer,
};

export { MenuStyle };
