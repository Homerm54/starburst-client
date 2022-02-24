import { FlattenInterpolation } from 'styled-components';

type NativeButtonProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'type'>;
/** Types of button style available, changes the color  */
type ButtonStyleTypes = 'primary' | 'secondary' | 'info' | 'danger' | 'success' | 'unstyled';
/** Types of button style variants, changes teh appearance of the button */
type ButtonStyleVariants = 'filled' | 'outlined' | 'text';
/** Type of button size */
type ButtonSize = 'small' | 'medium' | 'large';
/** Diferent shapes that the button can have */
type ButtonShape = 'round' | 'box';

// --------- Style types
type VariantStyleObject = { [key in ButtonStyleVariants]: FlattenInterpolation<any>; }
type TypeStyleObject = { [key in ButtonStyleTypes]: VariantStyleObject; }
type SizeStyleObject = { [key in ButtonSize]: FlattenInterpolation<any>; }

type IconComplex = { iconStart?: React.ReactNode, iconEnd?: React.ReactNode };

/** Props accepted by the Button component */
interface ButtonProps extends NativeButtonProps {
  /** Type of button to display, the type modifies the style applied */
  type?: ButtonStyleTypes;
  /** Variation in the style of the button */
  variant?: ButtonStyleVariants;
  /** Size of the button */
  size?: ButtonSize;
  /** Shape of the button box is default, round will make the button a circle if content is small enough (i.e. an icon) */
  shape?: ButtonShape;
  // --------- ICON
  /**
   * Icon to show alongside the body of the button.
   * By default (icon is a React Node), the icon will be placed on the left side of the
   * button, specify position with an object if otherwise.
   */
  icon?: React.ReactNode | IconComplex;
  // ---------- STATES
  /** Whether or not the button is disabled, if true will block the onClick call */
  disabled?: boolean;
  /** 
   * Whether or not to display a loading icon alongside the button content, 
   * if true will block the onClick call.
   */
  loading?: boolean;
  // ---------- ATTRIBUTES
  /** HTML type of the button */
  htmlType?: 'button' | 'reset' | 'submit';
  /** Which HTML component to use */
  component?: 'button' | 'a' | 'div';
  /** Whether to make the button fill all the available width space */
  block?: boolean;
}

// ---------- STYLE PROPS ----------
/** Props passed to the styled component object, see the ButtonProps for details on the fields */
interface ButtonStyleProps extends NativeButtonProps {
  readonly disabled: boolean;
  readonly $loading: boolean;
  readonly $type: ButtonStyleTypes;
  readonly $variant: ButtonStyleVariants;
  readonly $size: ButtonSize;
  readonly $shape: ButtonShape;
  readonly $fullWidth: boolean;
}

export type {
  ButtonProps,
  ButtonStyleTypes,
  ButtonStyleProps,
  ButtonStyleVariants,
  IconComplex,

  TypeStyleObject,
  VariantStyleObject,
  SizeStyleObject,
};
