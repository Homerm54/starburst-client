import { Col, Row } from "components/ui/Grid";
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


const ServerError = () : JSX.Element => {

  return(
    <Container>
      <Row justifyContent="center" alignItems="center" width="100%">
        <Col width={1/2}>
          <h1>500</h1>
        </Col>

        <Col width={1/2}>
          <Row gutter={16}>
            <Col width={'100%'} noGutter>
              <strong>SORRY!</strong>
            </Col>

            <Col width={'100%'} noGutter>
              Internal server error!
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}


export default ServerError;
