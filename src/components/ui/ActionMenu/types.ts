type NativeProps = React.ComponentPropsWithoutRef<'div'>;

type Tool = {
  icon: React.ReactNode;
  name: string; // TODO: Replace to React Node when tooltip added
  onClick: () => unknown;
}

interface ActionMenuProp extends NativeProps {
  /** ? */
  tools: Array<Tool>;
  /** ? */
  showName?: 'tooltip' | 'inline';
  /** Fill width for horizontal menu, fill height for vertical */
  fullWidth?: boolean;
  /** ? */
  orientation?: 'vertical' | 'horizontal';
}

export type { ActionMenuProp };
