import React from "react";

type NativeProps = React.ComponentPropsWithoutRef<'input'>;
// type Variants = 'borderless' | 'outlined' | 'filled';
type InputColors = 'basic' | 'warning' | 'info' | 'success';
type InputSize = 'small' | 'medium' | 'large';

interface BaseInputProps {
  /** Label for the input component */
  label?: React.ReactNode;
  /** Style variant of the input component, defaults to `outlined` */
  // variant?: Variants;
  /** Color to apply to the input component, defaults to `basic` */
  color?: InputColors;
  /** Icon, text or React node to append at the **beginning** of the input */
  prefix?: React.ReactNode;
  /** Icon, text or React node to append at the **end** of the input */
  sufix?: React.ReactNode;
  /** Size of the input component, defaults to medium */
  size?: InputSize;
  /** Whether or not the input component should expand to fill all the available space */
  fullWidth?: boolean;
  /** *For controlled component*, the value to show in the input component */
  value?: any;
  /** *For controlled component*, callback when the user changes the input value */
  onChange?: (e: React.FormEvent<HTMLInputElement>) => unknown;
  /** Helper text to show underneath the input component, will be replaced by the error text is error */
  helperText?: React.ReactNode;
  /** Error text to show underneath the input component, only show if error is true */
  errorText?: React.ReactNode;
  /** Whether or not to show the input component in error mode */
  error?: boolean;
  /** 
   * Show clear icon at the end of the input component, and allow to clear **all** the content
   * inside the component.
   */
  allowClear?: boolean;
  /** Function to be called when the input component is cleared */
  onClear?: () => unknown;
}

interface SearchProps extends InputProps {
  /** Callback to be called once the user pressed the search button */
  onSearch: (e: string) => unknown;
}

type InputProps = BaseInputProps & Omit<NativeProps, keyof BaseInputProps>;
type PasswordProps = Omit<InputProps, 'sufix' | 'type'>; // The sufix is added by the component itself


// --------- Style Props
interface InputContainerProps {
  $color: InputColors;
  $isFocused: boolean;
  $isReadOnly?: boolean;
  $error: boolean;
  $size: InputSize;
  $disabled?: boolean;
}

interface ParentContainerProps {
  $fullWidth: boolean;
  $error: boolean;
  $size: InputSize;
  $disabled?: boolean;
  $color: InputColors;
}

interface LabelProps {
  $size: InputSize;
}

export type {
  InputProps,
  PasswordProps,
  SearchProps,
  InputContainerProps,
  ParentContainerProps,
  
  InputSize,
  LabelProps,
};