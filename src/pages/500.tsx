import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Col, Row, Button } from "components/ui";
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
      <Row spacing={{ x: 3 }}>
        <Col xs={6} style={{ textAlign: 'end' }}>
          <Typography variant="h1">500</Typography>
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
                Server didn&apos;t response on time
              </Typography>
            </Col>
          </Row>
        </Col>

        {
          retry
          && (
            <Col flex={{ basis: '100%' }} style={{marginTop: '1rem'}}>
              <Button
                variant="text"
                size="large"
                style={{ margin: 'auto', color: 'inherit' }}
                onClick={retry}
                icon={{ iconEnd: <FontAwesomeIcon icon="arrow-rotate-left" /> }}
              >
                Check connection again
              </Button>
            </Col>
          )
        }
      </Row>
    </Container>
  );
};


export default ServerError;
