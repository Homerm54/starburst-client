import { TypographyContainer } from './style';
import { Props } from './types';

const Typography = ({ component, children, variant }: Props): JSX.Element => {
  let flag = false;

  switch (variant) {
  case 'body1':
  case 'body2':
  case 'caption':
  case 'overline':
  case 'subtitle1':
    flag = true;
    break;
  default:
    break;
  }
  
  return(
    <TypographyContainer variant={variant} as={component || (flag? 'div' : variant)}>
      {children}
    </TypographyContainer>
  );
};


export { Typography };
