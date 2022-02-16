import LoadingIcon from "assets/icons/Loading";
import { ButtonContainer } from "./style";
import { ButtonProps } from "./types";

const Button = ({
  icon,
  children,
  onClick,
  loading = false,
  disabled = false,
  size = 'medium',
  type = 'primary',
  variant = 'filled',
  shape = 'box',
  htmlType = 'button',
  ...rest
}: ButtonProps): JSX.Element => {
  // TODO: Logic to reflect show icon in position for object type
  const Icon = () => {
    if (loading) return <><LoadingIcon />&nbsp;&nbsp;</>;
    if (icon) return <>{icon}&nbsp;&nbsp;</>;
    return null;
  };

  return (
    <ButtonContainer
      type={htmlType}
      $shape={shape}
      $size={size}
      $type={type}
      $variant={variant}
      $loading={loading}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <Icon />{children}
    </ButtonContainer>
  );
};


export { Button };
