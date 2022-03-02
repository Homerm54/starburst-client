import { LinkProps as RouterNativeLinkProps } from 'react-router-dom';

type LinkTypes = 'primary' | 'text';

interface LinkProps extends Omit<RouterNativeLinkProps, 'to'> {
  /** Whether to give a custom style to the link if matches the current location */
  styleOnMatch?: boolean;
  /** Type of link to use, if text, link will be plain text */
  type?: LinkTypes;
  to?: RouterNativeLinkProps['to'];
}

interface StyledLinkProps {
  $active: boolean;
  $type: LinkTypes;
}

export type { LinkProps, StyledLinkProps };