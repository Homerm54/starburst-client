import styled from "styled-components";

const Divider = styled.div`
  border-color: ${({ theme }) => theme.palette.divider};
`;

export { Divider as DividerStyled };