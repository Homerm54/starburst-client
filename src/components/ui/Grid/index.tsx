/**
 * Flex System Module for UI Design.
 * The System is based entirely in CSS Flex props.
 * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
 */
import { RowStyle, ColStyle } from './style';
import { useTheme } from 'styled-components';
import { FlexContainerProps, FlexItemProps, GenericObject } from './types';
import { useMediaQueries } from '../hooks';

/** Flexbox system max items in the same row */
const MaxItems = 12;
 
/**
 * Container of the flex system.
 */
const Row = ({
  align,
  justify,
  spacing,
  children,
  justifyItems,
  style = {},
  wrap = true,
  ...props
}: FlexContainerProps): JSX.Element => {
  const { spacing: spaceGenerator } = useTheme();
  const trueSpacing = { x: spaceGenerator(1), y: spaceGenerator(1) };
  const flexStyle: GenericObject = {};

  if (wrap) flexStyle.flexFlow = "row wrap";
  else flexStyle.flexFlow = "row nowrap";
  if (justify) flexStyle.justifyContent = justify;
  if (align) flexStyle.alignItems = align;
  if (justifyItems) flexStyle.justifyItems = justifyItems;

  if (spacing) {
    if (typeof spacing === 'number') {
      trueSpacing.x = spaceGenerator(spacing);
      trueSpacing.y = spaceGenerator(spacing);
    } else {
      if (spacing.x) trueSpacing.x = spaceGenerator(spacing.x);
      if (spacing.y) trueSpacing.y = spaceGenerator(spacing.y);
    }
  }

  return (
    <RowStyle
      $spacing={trueSpacing}
      style={{...style, ...flexStyle}}
      {...props}
    >
      {children}
    </RowStyle>
  );
};

/**
 * Flex item, must be direct child of the flex container
 */
const Col = ({
  xs,
  sm,
  md,
  lg,
  xl,

  alignSelf,
  flex,
  children,

  style = {},
  ...props
}: FlexItemProps): JSX.Element => {
  const activeBreakpoints = useMediaQueries();
  const extraStyle: GenericObject = {};
  const breakpointProps = { xs, sm, md, lg, xl };

  if (alignSelf) extraStyle.alignSelf = alignSelf;
  if (flex) {
    // This conditional means that the flex props overrides the breakpoints props
    if (typeof flex === 'number') {
      extraStyle.flex = `${flex} ${flex} auto`;
    } else {
      extraStyle.flex = `${flex.grow || 1} ${flex.shrink || 1} ${flex.basis || 'auto'}`;
    }
  } else {
    // Process the flex item based on the breakpoints
    activeBreakpoints.forEach((breakpoints) => {
      const settings = breakpointProps[breakpoints];

      if (settings) {
        if (typeof settings === 'number') {
          const width = (settings / MaxItems) * 100;
          extraStyle.flex = `0 0 ${width}%`;
        } else {
          const width = (settings.span / MaxItems) * 100;
          extraStyle.flex = `0 0 ${width}%`;
          
          if (settings.offset) {
            if (typeof settings.offset === 'number') {
              const width = (settings.offset / MaxItems) * 100;
              extraStyle.marginLeft = `${width}%`;
            } else {
              if (settings.offset.left) {
                const width = (settings.offset.left / MaxItems) * 100;
                extraStyle.marginLeft = `${width}%`;
              }

              if (settings.offset.right) {
                const width = (settings.offset.right / MaxItems) * 100;
                extraStyle.marginRight = `${width}%`;
              }
            }
          }
        }
      }
    });
  }

  return (
    <ColStyle
      style={{ ...style, ...extraStyle }}
      {...props}
    >
      {children}
    </ColStyle>
  );
};


export { Row, Col };
