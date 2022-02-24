import { StyledLink } from './style';
import { LinkProps } from './types';
import { useLocation } from 'react-router-dom';

const Link = ({
  children,
  to,
  type="text",
  styleOnMatch = false,
  ...rest
}: LinkProps): JSX.Element => {
  const { pathname } = useLocation();

  const matches = pathname === to;

  return (
    <StyledLink
      to={to}
      $type={type}
      $active={matches && styleOnMatch}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};


export { Link };
