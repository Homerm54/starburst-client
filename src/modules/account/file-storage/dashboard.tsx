import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileStorageUserData } from "api/file-storage/types";
import { BackButton, Metrics, StateSection } from "components/account/file-storage/dashboard";
import { Col, Container, Row } from "components/ui";
import { useHistory } from "react-router-dom";
import { useTheme } from "styled-components";

const userMetrics: FileStorageUserData = {
  files: 69,
  remain: {
    gb: 420,
    kb: 420,
    mb: 420,
  },
  spaceUsed: {
    gb: 420,
    kb: 420,
    mb: 420,
  },
  total: {
    gb: 1000,
    kb: 1000,
    mb: 1000,
  },
  used: {
    gb: 420,
    kb: 420,
    mb: 420,
  }
};

function Dashboard({ goToBindScreen }: { goToBindScreen: () => unknown }): JSX.Element {
  const history = useHistory();
  const { spacing } = useTheme();
  const goBack = () => history.goBack();

  return(
    <Container maxWidth="lg" style={{ margin: `${spacing(4)}px auto`, position: 'relative' }}>
      <BackButton onClick={goBack} />

      <Row spacing={3}>
        <Col xs={12} className="mb-5">
          <FontAwesomeIcon
            size="8x"
            icon="hard-drive"
            className="text-info"
            style={{ margin: 'auto', width: '100%' }}
          />
        </Col>

        <Col xs={{ span: 5, offset: 1 }}>
          <Metrics data={userMetrics} />
        </Col>

        <Col xs={{ offset: 1, span: 5}}>
          <StateSection onClick={goToBindScreen} />
        </Col>
      </Row>
    </Container>
  );
}

export { Dashboard };
