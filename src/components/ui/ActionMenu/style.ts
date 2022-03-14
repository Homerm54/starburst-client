import styled from "styled-components";

const MenuIcon = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

  min-width: 40px;
`;

const MenuText = styled.div``;

const MenuTool = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
`;

const MenuContainer = styled.div<{ $fullWidth: boolean, $orientation: 'row' | 'column' }>`
  display: flex;
  flex-flow: ${({ $orientation }) => $orientation};
  justify-content: space-around;
  align-items: baseline;

  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'fit-content'};
  margin: ${({ theme }) => theme.spacing(1.25)}px 0;

  & > ${MenuTool} {
    margin: ${({ theme, $orientation }) => $orientation === 'row'
    ? `0 ${theme.spacing(2)}px`
    : `0 0`
};
    justify-content: ${({ $orientation }) => $orientation === 'row' ? 'space-around' : 'flex-start'};
  }
`;

const MenuStyle = {
  Icon: MenuIcon,
  Text: MenuText,
  Tool: MenuTool,
  Container: MenuContainer,
};

export { MenuStyle };
