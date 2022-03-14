import styled from "styled-components";

// [TYPES]
interface ContextMenuContainerProps {
  $position: { x: number | string; y: number | string };
}

const ContextMenuTopParent = styled.div``;

const ContextMenuContainer = styled.div<ContextMenuContainerProps>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.contextMenu};
  top: ${({ $position }) => $position.y}px;
  left: ${({ $position }) => $position.x}px;

  background-color: ${({ theme }) => theme.palette.grey[900]};
  border-radius: ${({ theme }) => theme.borderRadius}px;

  padding: ${({ theme }) => `${theme.spacing(1)}px ${theme.spacing(0.25)}px`};
`;

const ContextMenuStyle = {
  Container: ContextMenuContainer,
  Top: ContextMenuTopParent,
};

export { ContextMenuStyle };
