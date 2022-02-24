import styled, { css } from "styled-components";
import { TypographyStyleProps } from "./types";

const HTypeBaseStyle = {
  h1: css`
    font-size: 6rem;
    font-weight: 800;
    line-height: 1.12;
  `,

  h2: css`
    font-size: 3.75rem;
    font-weight: 800;
    line-height: 1.2;
  `,

  h3: css`
    font-size: 2.25rem;
    line-height: 1.2;
    letter-spacing: 0.2;
    font-weight: 400;
  `,

  h4: css`
    font-size: 1.75rem;
    line-height: 1.5;
    letter-spacing: 0.2;
    font-weight: 400;
  `,

  h5: css`
    font-size: 1.5rem;
    line-height: 1.5;
    letter-spacing: 0.1;
  `,

  h6: css`
    line-height: 1.5;
    font-weight: 500;
  `,
  
  subtitle1: css`
    font-size: 1.125rem;
    line-height: 1.33;
    letter-spacing: 0;
    font-weight: 500;
  `,

  body1: css`
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0;
    font-weight: 40;
  `,

  body2: css`
    font-size: 0.875rem;
    line-height: 1.5;
    letter-spacing: 0;
    font-weight: 40;
  `,

  caption: css`
    display: inline-block;
    font-size: "0.75rem";
    line-height: 1.5;
    letter-spacing: 0;
    font-weight: 700;
  `,

  overline: css`
    fontWeight: 400;
    fontSize: 0.75rem;
    lineHeight: 2.66;
    textTransform: uppercase;
  `,
};

const TypographyContainer = styled.div<TypographyStyleProps>`
  ${({ variant }) => HTypeBaseStyle[variant]};
`;

export { TypographyContainer  };
