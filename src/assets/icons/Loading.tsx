import styled from "styled-components";

type IconProps = {
  /** Size of the icon in pixels */
  size?: number;
}

const Container = styled.svg`
  @keyframes rotating {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  animation: rotating 1s linear infinite;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const LoadingIcon = ({ size = 16 }: IconProps): JSX.Element => {
  return (
    <Container
      fill="currentColor"
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"
      />
    </Container>
  );
};


export default LoadingIcon;
