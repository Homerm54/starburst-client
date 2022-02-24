import React from "react";

type NativeProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'title'>;

interface CardProps extends NativeProps {
  /** Title of the Card, aligned to the left */
  title?: React.ReactNode;

  /** Actions, placed to the right of the title */
  actionsTop?: React.ReactNode;

  /** Actions, placed to the places on the bottom, centered */
  actionsBottom?: React.ReactNode | Array<React.ReactNode>;
}

export type { CardProps };