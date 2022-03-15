import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileStorageUserData } from "api/file-storage/types";
import { Button, Typography as TypographyOG, Progress } from "components/ui";
import styled from "styled-components";

const ButtonTopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
`;

const Typography = styled.div`
  font-size: ${({ theme }) => theme.baseFontSize + 3}px;
`;

function BackButton({ onClick }: { onClick: () => unknown }) {
  return (
    <ButtonTopLeft>
      <Button
        size="large"
        type="unstyled"
        onClick={onClick}
        icon={<FontAwesomeIcon icon="arrow-left" />}
      >
        Back
      </Button>
    </ButtonTopLeft>
  );
}

function Metrics({ data }: { data: FileStorageUserData }): JSX.Element {
  const spaceUsedInPercentage = normalize(data.spaceUsed.kb, data.total.kb);

  return(
    <>
      <TypographyOG variant="h5" component="h2" className="mb-3">
        Space Metrics
      </TypographyOG>
      
      <Typography>Total files used: {data.files}</Typography>

      <Typography>Space used: {data.spaceUsed.kb} KB.</Typography>
      <Typography>Space remain: {data.remain.kb} KB.</Typography>
      <Typography>Total space in disk: {data.total.kb} KB.</Typography>

      <Progress
        className="mt-3"
        style={{ height: 8 }}
        value={spaceUsedInPercentage}
        color={colorMapper(spaceUsedInPercentage)}
        hint={`Total space used: ${spaceUsedInPercentage}%`}
      />
    </>
  );
}

function StateSection({ onClick }: { onClick: () => unknown }) {
  return (
    <>
      <TypographyOG variant="h5" component="h2" className="mb-3">
        State Section
      </TypographyOG>

      <Typography>
        Dropbox account active: <span className="text-success">YES</span>
      </Typography>

      <Typography className="mt-3 mb-2">
        Actions:
      </Typography>

      <Button
        variant="outlined"
        onClick={onClick}
        icon={<FontAwesomeIcon icon="arrow-right" />}
      > 
        Refresh account connection
      </Button>
    </>
  );
}

export { BackButton, Metrics, StateSection };

function normalize(value: number, total: number) {
  return (value / total) * 100;
}

function colorMapper(value: number) {
  if (value < 50) return 'success';
  if (value < 75) return 'warning';
  return 'error';
}
