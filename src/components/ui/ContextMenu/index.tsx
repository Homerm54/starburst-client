import { useClickOutside } from "lib/hooks";
import { ContextMenuStyle } from "./style";
import { ContextMenuProps } from "./types";

function ContextMenu({ position, show, children, onClose }: ContextMenuProps): JSX.Element {
  const ref = useClickOutside<HTMLDivElement>(handleClose);

  function handleClose() {
    if (onClose) onClose();
  }

  return (
    <ContextMenuStyle.Top ref={ref}>
      <ContextMenuStyle.Container $position={position} hidden={!show}>
        {children}
      </ContextMenuStyle.Container>
    </ContextMenuStyle.Top>
  );
}


export { ContextMenu };
