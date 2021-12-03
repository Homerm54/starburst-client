/**
 * Flex System Module for UI Design.
 * The System is based entirely in CSS Flex props.
 * @see https://rebassjs.org/reflexbox/ 
 * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
 */

// Has to be imported from rebass in order for the props to work
import { Box, Flex } from 'rebass/styled-components';
import { FlexProps, BoxProps } from 'rebass';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

type base = {
  /** Spacing for the left - rigth margin of the parent Row in the system */
  gutter?: number
};
type RowProps = base & FlexProps;
type ColProps = base & BoxProps;

/**
 * Wrapper for the Row/Col System.
 * 
 */
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

/**
 * Column for the Row/Col System.
 * 
 * For responsiveness, all the widths, flexGrows and other props accepts an array that represents the
 *  different values across the breakpoints set by the theme.
 * 
 * Example: `width={[100, '100%']}` means that the Col will have a width of 100px, from xs breakpoint
 *  (0px) up to the sm breakpoint (second position in the array).
 * 
 * Add up to 5 options for the 5 available breakpoints.
 * 
 * 
 * Tips:
 *  
 * * To fill available width without using `width: 100%;`, use the flexGrow prop.
 *  This flexGrow prop will grow the component to fill available, based on other siblings with flexGrow.
 * * To fill by percentage, use `width={1/3}`, this will fill 0.3333% of available width (Row parent).
 * * To fill exact pixel width, use `width={100}` for a width of 100px. 
 * 
 * Other flex properties can be used to manipulate the Col behaviour as well.
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
 * 
 */
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
