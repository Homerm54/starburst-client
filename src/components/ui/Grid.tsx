/**
 * Grid Syste Module for UI
 * @see https://rebassjs.org/reflexbox/ 
 */

// Has to be imported from rebass in order for the props to work
import { Box, Flex } from 'rebass/styled-components';
import { FlexProps, BoxProps } from 'rebass';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

type base = { gutter?: number };
type RowProps = base & FlexProps;
type ColProps = base & BoxProps;

const Row = ({ gutter, ...props }: RowProps): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <Flex
      flexWrap="wrap"
      flexDirection="row"
      my={0}
      mx={(gutter || theme.space[3]) / 2}
      {...props}
    />
  );
}

const Col = ({ gutter, ...props }: ColProps): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <Box
      p={(gutter || theme.space[3]) / 2}
      {...props}
    />
  );
}
export { Row, Col };
