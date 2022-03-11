type NativeProps = React.ComponentPropsWithoutRef<'div'>;

interface Props extends Omit<NativeProps, 'child'> {
  /** True if the divider will be used in a vertical way, false to horizontal */
  type?: 'horizontal' | 'vertical';

  /** Text to show in the divider */
  text?: string;

  /** Orientation of the text component in the divider */
  textOrientation?: 'left' | 'center' | 'right';
}

interface HorizontalDividerProps {
  /** Orientation of the text component in the divider */
  orientation: 'left' | 'center' | 'right';
}

export type { Props, HorizontalDividerProps };
