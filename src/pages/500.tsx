import { Col, Row } from "components/ui/Grid";
import { Text } from "components/ui/Typography";
import styled from "styled-components";

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


const ServerError = ({ retry } : { retry?: () => void}) : JSX.Element => {

  return(
    <Container>
      <Row justifyContent="center" alignItems="center" width="100%" maxWidth={1000}>
        <Col
          width={[1, 1, 1 / 2]}
          className="text-md-end"
          mb={[-64, -64, 'auto']}
        >
          <Text as="h1" size={6}>500</Text>
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
                Server didn&apos;t response on time
              </Text>
            </Col>
          </Row>
        </Col>

        {
          retry
          && (
            <Col width={[1]} fontSize={3} role="button" onClick={retry}>
              Check connection again
            </Col>
          )
        }
      </Row>
    </Container>
  );
};


export default ServerError;
