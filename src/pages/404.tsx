import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Col, Row, Button } from "components/ui";
import { useHistory } from "react-router";
import routes from "router/routes";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(0, 115, 185) !important;
  text-align: center!important;
  padding-top: 3rem !important;
  padding-bottom: 1.5rem!important;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;


const ServerError = (): JSX.Element => {
  const history = useHistory();

  return (
    <Container>
      <Row spacing={{ x: 3 }}>
        <Col xs={6} style={{ textAlign: 'end' }}>
          <Typography variant="h1">404</Typography>
        </Col>

        <Col xs={6}>
          <Row style={{ textAlign: 'start' }}>
            <Col flex={{ basis: '100%' }}>
              <Typography variant="h3" component="div">
                SORRY!
              </Typography>
            </Col>

            <Col flex={{ basis: '100%' }}>
              <Typography variant="h5" component="div">
                The page you’re looking for was not found.
              </Typography>
            </Col>
          </Row>
        </Col>

        <Col flex={{ basis: '100%' }}>
          <Button
            variant="text"
            size="large"
            style={{ margin: 'auto', color: 'inherit' }}
            onClick={() => history.replace(routes.dashboard)}
            icon={{ iconEnd: <FontAwesomeIcon icon="arrow-left" /> }}
          >
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};


export default ServerError;
