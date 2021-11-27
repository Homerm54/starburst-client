import { Col, Row } from "components/ui/Grid";
import { Text } from "components/ui/Typography";
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
      <Row justifyContent="center" alignItems="center" width="100%" maxWidth={1000}>
        <Col
          width={[1, 1, 1 / 2]}
          className="text-md-end"
          mb={[-42, -42, 'auto']}
        >
          <Text size={6} as="h1">404</Text>
        </Col>

        <Col width={[1, 1, 1 / 2]}>
          <Row gutter={16} className="text-md-start">
            <Col width={'100%'} noGutter>
              <Text size={3}>
                SORRY!
              </Text>
            </Col>

            <Col width={'100%'} noGutter>
              <Text size={2}>
                The page you’re looking for was not found.
              </Text>
            </Col>
          </Row>
        </Col>

        <Col width={[1]} fontSize={3} role="button" onClick={() => history.replace(routes.dashboard)}>
          Back to Home
        </Col>
      </Row>
    </Container>
  )
}


export default ServerError;
