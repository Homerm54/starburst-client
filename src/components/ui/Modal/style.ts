import { zIndex } from "assets/style/theme";
import styled from "styled-components";

const BaseContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: ${zIndex.modal};
`;

const BodyContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background-color: ${props => props.theme.colors.primary.normal};
  border-radius: 16px;
`;

export { BaseContainer, BodyContainer };
