import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackButton, Metrics, StateSection } from "components/account/file-storage/dashboard";
import { Col, Container, Loading, Row } from "components/ui";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "styled-components";
import { FileStorageUserData } from "api/file-storage/types";
import api from "api";
import Console from "lib/Console";

function Dashboard({ goToBindScreen }: { goToBindScreen: () => unknown }): JSX.Element {
  const [data, setData] = useState<FileStorageUserData | null>(null);
  
  const history = useHistory();
  const { spacing } = useTheme();
  const goBack = () => history.goBack();

  const loadData = () => {
    setData(null);
    api.fileStorage.account.getAccountMetrics().then(setData);
  };

  useEffect(() => { loadData(); }, []);
  
  Console.log(data);
  if(!data) return <Loading />;

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
          <Metrics data={data} reload={loadData} /> 
        </Col>

        <Col xs={{ offset: 1, span: 5}}>
          <StateSection onClick={goToBindScreen} data={data} />
        </Col>
      </Row>
    </Container>
  );
}

export { Dashboard };
