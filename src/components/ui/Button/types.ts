import { FlattenInterpolation } from 'styled-components';

/** Types of button style available, changes the color  */
type ButtonStyleTypes = 'primary' | 'secondary' | 'info' | 'danger' | 'sucess' | 'unstyled';

/** Types of button style variants, changes teh appearance of the button */
type ButtonStyleVariants = 'filled' | 'link' | 'outlined' | 'text';

/** Type of button size */
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonShape = 'round' | 'box';

type NativeButtonProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'type'>;

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
  icon?: React.ReactNode | { iconStart?: React.ReactNode, iconEnd?: React.ReactNode };

  // ---------- STATES
  /** Whether or not the button is disabled, if true will block the onClick call */
  disabled?: boolean;

  /** 
   * Whether or not to display a loading icon alongside the button content, 
   * if true will block the onClick call.
   */
  loading?: boolean;

  // ---------- ATTRIBUTES
  htmlType?: 'button' | 'reset' | 'submit';
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
}

type VariantStyleObject = { [key in ButtonStyleVariants]: FlattenInterpolation<any>; }
type TypeStyleObject = { [key in ButtonStyleTypes]: VariantStyleObject; }

export type {
  ButtonProps,
  ButtonStyleTypes,
  ButtonStyleProps,
  ButtonStyleVariants,

  TypeStyleObject,
};
