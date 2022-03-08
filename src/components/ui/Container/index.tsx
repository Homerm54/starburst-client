import styled, { useTheme } from "styled-components";
import { useMediaQueries } from "../hooks";
import { ContainerProps } from "./types";

const ContainerStyle = styled.div``;

function Container({
  component,
  fixed,
  children,
  style,
  maxWidth = 'lg',
  ...rest
}: ContainerProps): JSX.Element {
  const theme = useTheme();
  const breakpoints = useMediaQueries();
  let trueMaxWidth: string | number = 'auto';

  if (fixed) {
    trueMaxWidth = theme.breakpoints.values[breakpoints[breakpoints.length - 1]];
  } else {
    if (typeof maxWidth === "number") {
      trueMaxWidth = maxWidth;
    } else {
      trueMaxWidth = theme.breakpoints.values[maxWidth];
    }
  }

  return (
    <ContainerStyle
      {...rest}
      style={{ width: '100%', maxWidth: trueMaxWidth, ...style }}
      as={component}
    >
      {children}
    </ContainerStyle>
  );
}


export { Container };
