/**
 * TODO: Add themed buttons
 * Basic
 * Danger
 * Info
 * Outlined
 * Link
 * 
 * Color on hoover
 */
import { LoadingIcon } from "components/shared/Loading";
import { BaseButtonContainer } from "./style";

type BaseButtonProps = { 
  children?: React.ReactNode;

  onClick?: () => unknown;
}

type ButtonStyleTypes = 'basic' | 'danger' | 'info' | 'link' | 'outlined' | 'secondary' | 'unstyled';
/** Types of button style available  */
const ButtonStyleTypes = {
  basic: 'basic' as ButtonStyleTypes,
  danger: 'danger' as ButtonStyleTypes,
  info: 'info' as ButtonStyleTypes,
  link: 'link' as ButtonStyleTypes,
  outlined: 'outlined' as ButtonStyleTypes,
  secondary: 'secondary' as ButtonStyleTypes,
  unstyled: 'unstyled' as ButtonStyleTypes,
};


type ButtonProps = BaseButtonProps & {
  /** Type of button to display, the type modifies the style applied */
  type?: ButtonStyleTypes;

  /** 
   * Whether or not to display a loading icon alongside the button content, 
   * if true will block the onClick call.
   */
  loading?: boolean;

  /** Whether or not the button is disabled, if true will block the onClick call */
  disabled?: boolean;

  /** Icon to show alongside the body of the button */
  icon?: React.ReactNode;
}

const BaseButton = ({ children, onClick }: BaseButtonProps): JSX.Element => {
  return(
    <BaseButtonContainer onClick={() => onClick && onClick()}>
      {children}
    </BaseButtonContainer>
  );
};

const Button = ({
  icon,
  children,
  onClick,
  loading = false,
  disabled = false,
  type = ButtonStyleTypes.basic,
}: ButtonProps): JSX.Element => {
  const handleClick = () => {
    if (onClick && !loading && !disabled) {
      onClick();
    }
  };

  const Icon = () => {
    if (loading) return <LoadingIcon />;
    if (icon) return icon as JSX.Element;
    return null;
  };

  switch (type) {
    case ButtonStyleTypes.unstyled:
      return (
        <BaseButtonContainer
          disabled={disabled}
          loading={loading}
          onClick={handleClick}
        >
          <Icon />&nbsp;&nbsp;{children}
        </BaseButtonContainer>
      );
  
    default:
      throw new Error(`Invalid type passed: ${type}`);
  }
};


export { BaseButton, Button };
