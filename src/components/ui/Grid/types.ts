import { Breakpoints } from "assets/style/types";
import React from "react";
import { CSSProperties } from "styled-components";

type NativeProps = React.ComponentPropsWithoutRef<'div'>;
type BreakPointColSettings = {
  /** Columns that this item will span, in a 12 column based system */
  span: number;
  /** Column offset, in a 12 column based system, if only number, offset to the left */
  offset?: number | { left?: number; right?: number };
}

type Spacing = {
  /** Spacing in the X axis (space between one item and the other, in the same row) */
  x?: number;
  /** Spacing in the Y axis (space between one row, and the next row above or below) */
  y?: number;
}

type FlexProps = {
  /** Proportion of grow of this element, related to sibling items */
  grow?: number;
  /** Propertion of shrink of this element, related to sibling items */
  shrink?: number;
  /** Flex-Basis property, width / height depending on the flex container (row/col) */
  basis?: string;
}

type GenericObject = { [key: string]: string; };

interface FlexContainerProps extends NativeProps {
  /** Flexbox justification of the **content** inside the Flexbox Container */
  justify?: CSSProperties['justifyContent'];
  /** Flexbox justification of the **items** inside the Flexbox Container */
  justifyItems?: CSSProperties['justifyItems'];
  /** Flexbox aligment of the **items** inside the Flexbox Container */
  align?: CSSProperties['alignItems'];
  /** Set the spacing among the container, and the items inside the container */
  spacing?: number | Spacing;
  /** Whether this container will span a line or not */
  wrap?: boolean;
}

type BreakpointType = { [key in Breakpoints]?: number | BreakPointColSettings; }

interface FlexItemProps extends BreakpointType, NativeProps {
  /** Align only this item related to the grid container */
  alignSelf?: CSSProperties['alignSelf'];
  /** Special flex property to set item behaviour in flex context, not fixed as with col/row */
  flex?: number | FlexProps;
}

interface RowStyleProps {
  $spacing: {
    x: number | string;
    y: number | string;
  }
}

export type { FlexContainerProps, FlexItemProps, RowStyleProps, GenericObject };