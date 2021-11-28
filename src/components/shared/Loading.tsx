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

const Hint = styled.div`
  width: 100%;
  text-align: center;
  padding-left: 1rem;
`;

function Loading(): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Lottie
        style={{
          width: 200,
          height: 200,
        }}
        animationData={replaceColors({
          sourceColors: ['#000000', '#ffffff'],
          targetColors: [theme.colors.primary.normal, theme.colors.secondary.normal],
          lottieObj: LoadingAnimation
        })}
      />

      <Hint>Loading...</Hint>
    </Container>
  )
}


export default Loading;
