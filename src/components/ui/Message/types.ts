import React from "react";

type Variants = 'warn' | 'success' | 'info' | 'error';
type Positions =
  | "top-left"
  | "top-center"
  | "top-right"
  | "left-center"
  | "right-center"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type NativeProps = React.ComponentPropsWithoutRef<'div'>;


interface MessageComponentProps extends Omit<NativeProps, 'children'> {
  position?: Positions;
  content?: NativeProps['children'];
  type: Variants;
}

interface MessageProps extends Omit<MessageComponentProps, 'type'> {
  timeout?: number | boolean;
}

interface MessageContainerStyleProps {
  $position: Positions;
}

export type {
  Variants,
  MessageProps,
  MessageComponentProps,
  MessageContainerStyleProps
};
