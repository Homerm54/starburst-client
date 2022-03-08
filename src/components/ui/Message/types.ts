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
  destroy: () => unknown;
  destroyOnClick?: boolean;
}

interface MessageProps extends Omit<MessageComponentProps, 'type' | 'destroy'> {
  timeout?: number | boolean;
}

interface MessageContainerStyleProps {
  $position: Positions;
  $showButton: boolean;
}

export type {
  Variants,
  MessageProps,
  MessageComponentProps,
  MessageContainerStyleProps
};
