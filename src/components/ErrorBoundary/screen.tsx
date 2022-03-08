import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Col, Row, Button } from "components/ui";
import styled, { ThemeProvider } from "styled-components";
import { ErrorScreenProps } from "./types";
import Console from "lib/Console";
import { useGlobalContext } from "components/shared/context";
import { dark as darktheme, light as lighttheme } from 'assets/style/theme';

function parseErrorMessage(error: Error) {
  Console.error(error);
  return {
    title: '500',
    message: "Server didn't response on time"
  };
}

const Container = styled.div`
  background-color: #8f5fe8 !important;
  text-align: center!important;
  padding-top: 3rem !important;
  padding-bottom: 1.5rem!important;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;


const ErrorScreen = ({
  error,
  resetErrorBoundary,
}: ErrorScreenProps): JSX.Element => {
  const context = useGlobalContext();
  const { title, message } = parseErrorMessage(error);

  return (
    <ThemeProvider theme={context.state.theme === 'dark' ? darktheme : lighttheme}>
      <Container>
        <Row spacing={{ x: 3 }}>
          <Col xs={6} style={{ textAlign: 'end' }}>
            <Typography variant="h1">{title}</Typography>
          </Col>

          <Col xs={6}>
            <Row style={{ textAlign: 'start' }}>
              <Col flex={{ basis: '100%' }}>
                <Typography variant="h3" component="div">
                SORRY!
                </Typography>
              </Col>

              <Col flex={{ basis: '100%' }}>
                <Typography variant="h3" component="div">
                  {message}
                </Typography>
              </Col>
            </Row>
          </Col>

          {
            resetErrorBoundary
          && (
            <Col flex={{ basis: '100%' }} style={{marginTop: '1rem'}}>
              <Button
                variant="text"
                size="large"
                style={{ margin: 'auto', color: 'inherit' }}
                onClick={resetErrorBoundary}
                icon={{ iconEnd: <FontAwesomeIcon icon="arrow-rotate-left" /> }}
              >
                Reaload Page
              </Button>
            </Col>
          )
          }
        </Row>
      </Container>
    </ThemeProvider>
  );
};


export { ErrorScreen };
