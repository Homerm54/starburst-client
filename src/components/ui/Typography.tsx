import React from 'react';
import styled from 'styled-components';

type DisplayRange = 1 | 2 | 3 | 4 | 5 | 6;
const Display = styled.div<{ size: DisplayRange }>`
  font-size: ${props => props.theme.displays[props.size - 2]};
  ${props => props.theme.mediaQueries.medium}{
    font-size: ${props => props.theme.formatDisplay(props.size - 1)};
  }
`;

type Props = { size: DisplayRange, children: React.ReactNode };
const Text = ({ size, children }: Props): JSX.Element => {
  return(
    <Display size={size}>
      {children}
    </Display>
  )
}


export { Text };
