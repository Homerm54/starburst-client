type NativeProps = React.ComponentPropsWithoutRef<'div'>;
type ProgressColors = 'info' | 'warning' | 'error' | 'success';

interface ProgressProps extends NativeProps {
  /** The value of the progress indicator. Value between 0 and 100 */
  value: number;
  /** The value of the buffered. Value between 0 and 100 */
  buffer?: number;
  /** Hint text to show below the progress bar */
  hint?: React.ReactNode;
  /** Alignment of the hint text */
  textPosition?: 'center' | 'left' | 'right';
  /** Color to use in the value bar */
  color?: ProgressColors;
}

export type { ProgressProps, ProgressColors };
