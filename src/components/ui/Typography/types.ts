/** Variations in the style of the Typography available */
type Variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'subtitle1';

type NativeProps = React.ComponentPropsWithoutRef<'span'>;

interface TypographyProps extends NativeProps {
  /** Variant of the Typography */
  variant: Variants;

  /** Which HTML component to use */
  component?: keyof HTMLElementTagNameMap;
}

interface TypographyStyleProps {
  /** Variant of the Typography */
  variant: Variants;
}

export type { TypographyStyleProps, Variants, TypographyProps };
