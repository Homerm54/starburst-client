import React from "react";
import styled from "styled-components";

const Container = styled.svg`
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface Props extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | undefined;
}

const StarburstLogo = ({ size = 12, ...rest }: Props): JSX.Element => {
  return (
    <Container
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="currentColor"
      {...rest}
    >
      <path
        style={{ transform: 'scale(9.5)' }}
        fill="currentColor"
        d="M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM2.5 9.12a.62.62 0 01-.44-.18.628.628 0 010-.88L4.12 6 2.06 3.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L5.09 5.2c.44.44.44 1.15 0 1.59L2.94 8.94a.62.62 0 01-.44.18zm7-.12h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5z"
      />
    </Container>
  );
};


export { StarburstLogo };
