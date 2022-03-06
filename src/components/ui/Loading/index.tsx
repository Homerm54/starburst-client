import { useTheme } from 'styled-components';
import Lottie from "lottie-react";
import LoadingAnimation  from 'assets/animations/loading_animation.json';
import { replaceColors } from 'lib/helpers';
import { Container, GlobalContainer, Hint } from './style';
import { LoadingProps } from './types';

function Loading({
  show = true,
  global = false,
  size = 200,
  hint = '',
  ...rest
}: LoadingProps): JSX.Element | null {
  const theme = useTheme();

  if (!show) return null;

  if (global) {
    return (
      <GlobalContainer {...rest}>
        <Lottie
          style={{
            width: size,
            height: size,
          }}
          animationData={replaceColors({
            sourceColors: '#ffffff',
            targetColors: theme.palette.primary.main,
            lottieObj: LoadingAnimation
          })}
        />

        {hint && <Hint>{hint}</Hint>}
      </GlobalContainer>
    );
  }

  return (
    <Container>
      <Lottie
        style={{
          width: size,
          height: size,
        }}
        animationData={replaceColors({
          sourceColors: ['#000000', '#ffffff'],
          targetColors: [theme.palette.primary.main, theme.palette.secondary.main],
          lottieObj: LoadingAnimation
        })}
      />

      {hint && <Hint>{hint}</Hint>}
    </Container>
  );
}

export default Loading;
