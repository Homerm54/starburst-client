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
import { BaseButton } from "./style";

type ButtonProps = { 
  children: React.ReactNode;

  onClick?: () => unknown;
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {

  return(
    <BaseButton onClick={() => onClick && onClick()}>
      {children}
    </BaseButton>
  );
};


export { Button };
