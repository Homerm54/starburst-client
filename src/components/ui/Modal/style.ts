import styled from "styled-components";

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const BodyContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => (theme.zIndex.modal + 1)};
  min-width: 300px;
`;

const Header = styled.div`
  display: flex;
  justify-content: end;
`;

const Footer = styled.div`
  display: flex;
  justify-content: end;
`;

export { Mask, BodyContainer, Header, Footer };
