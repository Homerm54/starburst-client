type NativeProps = React.ComponentPropsWithoutRef<'div'>;

interface ContextMenuProps extends NativeProps {
  position: { x: number | string; y: number | string; }
  show: boolean;
  onClose?: () => unknown;
}

export type { ContextMenuProps };
