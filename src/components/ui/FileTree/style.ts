import styled from "styled-components";

const Contianer = styled.div``;

const EmptyContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
const EmptyText = styled.div` 
  font-size: 1.25rem;
  color: ${({ theme }) => theme.palette.action.disabled};
`;
const EmptyIcon = styled.div` 
  color: ${({ theme }) => theme.palette.warning.main};
  margin: ${({ theme }) => theme.spacing(0.75)}px 0;
`;

const Item = styled.div``;

const Name = styled.div.attrs({ role: 'button' })`
`;

const Icon = styled.span`
  display: inline-block;
  min-width: ${({ theme }) => theme.spacing(3)}px;
`;

const Styles = {
  Contianer,
  Item,
  Name,
  NameIcon: Icon,
};

const Empty = {
  Contianer: EmptyContainer,
  Text: EmptyText,
  Icon: EmptyIcon,
};

export { Styles, Empty };
