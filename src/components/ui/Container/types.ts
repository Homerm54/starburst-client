import { Breakpoints } from "assets/style/types";

type NativeProps = React.ComponentPropsWithoutRef<'div'>;

interface ContainerProps extends NativeProps {
  maxWidth?: Exclude<Breakpoints, 'xs'> | number;
  fixed?: boolean;
  component?: keyof HTMLElementTagNameMap;
}

export type { ContainerProps };
