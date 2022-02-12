import { FlattenInterpolation } from 'styled-components';

interface BaseButtonProps { 
  readonly children?: React.ReactNode | string;

  /** Funtion to be called when the user presses the button */
  readonly onClick?: () => unknown;
}

/** Types of button style available, changes the color  */
type ButtonStyleTypes = 'primary' | 'secondary' | 'info' | 'danger' | 'sucess' | 'unstyled';

/** Types of button style variants, changes teh appearance of the button */
type ButtonStyleVariants = 'filled' | 'link' | 'outlined' | 'text';

/** Type of button size */
type ButtonSize = 'small' | 'medium' | 'large';

/** Props accepted by the Button component */
interface ButtonProps extends BaseButtonProps {
  /** Type of button to display, the type modifies the style applied */
  mode?: ButtonStyleTypes;

  /** Variation in the style of the button */
  variant?: ButtonStyleVariants;

  /** Size of the button */
  size?: ButtonSize;

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
}

// --------- STYLE PROPS ---------
/** Props passed to the styled component object, see the ButtonProps for details on the fields */
interface BaseStyleProps extends BaseButtonProps {
  readonly disabled: boolean;
  readonly loading: boolean;
  readonly type: ButtonStyleTypes;
  readonly variant: ButtonStyleVariants;
  readonly size: ButtonSize;
}

type VariantStyleObject = { [key in ButtonStyleVariants]: FlattenInterpolation<any>; }
type TypeStyleObject = { [key in ButtonStyleTypes]: VariantStyleObject; }

export type {
  ButtonProps,
  ButtonStyleTypes,
  BaseStyleProps,
  ButtonStyleVariants,

  TypeStyleObject,
};
