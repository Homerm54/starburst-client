import { Theme } from 'assets/style/theme';
import React from 'react';
import styled from 'styled-components';

type DisplayRange = 1 | 2 | 3 | 4 | 5 | 6;
type StyledProps = { size: DisplayRange, theme: Theme }

const Display = styled.div`
  font-size: ${(props: StyledProps) => props.theme.displays[props.size - 2]};
  ${props => props.theme.mediaQueries.medium}{
    font-size: ${props => props.theme.formatDisplay(props.size - 1)};
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { size: DisplayRange, children: React.ReactNode, as?: any };
const Text = ({ size, children, as }: Props): JSX.Element => {
  return(
    <Display size={size} as={as}>
      {children}
    </Display>
  )
}


export { Text };
