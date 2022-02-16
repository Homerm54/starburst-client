import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Lottie from "lottie-react";
import LoadingAnimation  from 'assets/animations/loading_animation.json';
import { replaceColors } from 'lib/helpers';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const GlobalContainer = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const Hint = styled.div`
  width: 100%;
  text-align: center;
  padding-left: 1rem;
`;

interface LoadingProps {
  show?: boolean;
  global?: boolean;
  size?: number;
  hint?: string;
}


// 30px for loading icon
function Loading({ show = true, global = false, size = 200, hint = '' } : LoadingProps): JSX.Element | null {
  const theme = useContext(ThemeContext);

  if (!show) return null;

  if (global) {
    return (
      <GlobalContainer>
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

const LoadingIcon = (): JSX.Element => <Loading size={30} />;


export default Loading;
export { LoadingIcon };
