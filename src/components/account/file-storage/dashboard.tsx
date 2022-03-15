import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileStorageUserData, units } from "api/file-storage/types";
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

function Metrics({ data, reload }: { data: Partial<FileStorageUserData>, reload: () => unknown }): JSX.Element {
  const spaceUsedInPercentage = (!data.spaceUsed || !data.total)
    ? 0
    :normalize(data.spaceUsed.kb, data.total.kb);

  return(
    <>
      <TypographyOG variant="h5" component="h2" className="mb-3">
        Space Metrics
      </TypographyOG>
      
      <Typography>Total files: {data.files}</Typography>

      <Typography>Space used by Starburst: {mapSize(data.spaceUsed)[0]} {mapSize(data.spaceUsed)[1]}.</Typography>
      <Typography>Space remain on disk: {mapSize(data.remain)[0]} {mapSize(data.remain)[1]}.</Typography>
      <Typography>Total space in disk: {mapSize(data.total)[0]} {mapSize(data.total)[1]}.</Typography>

      <Progress
        className="mt-3"
        style={{ height: 8 }}
        value={spaceUsedInPercentage}
        color={colorMapper(spaceUsedInPercentage)}
        hint={`Total space used: ${spaceUsedInPercentage}%`}
      />

      <Button
        icon={<FontAwesomeIcon icon="arrows-rotate" />}
        onClick={reload}
      >
        Reload data
      </Button>
    </>
  );
}

function StateSection({ onClick, data }: { onClick: () => unknown, data: Partial<FileStorageUserData> }) {
  return (
    <>
      <TypographyOG variant="h5" component="h2" className="mb-3">
        State Section
      </TypographyOG>

      <Typography>
        Dropbox account active: {stateMapper(data.active)}
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

function normalize(value: string, total: string) {
  return parseInt(((parseFloat(value) / parseFloat(total)) * 100).toFixed(2));
}

function mapSize(size?: units): [string, string] {
  if (!size) return ['N/A', 'KB'];

  const gb = parseFloat(size.gb);
  const mb = parseFloat(size.mb);
  const kb = parseFloat(size.kb);

  if(gb > 1) return [gb.toFixed(2), 'GB'];
  if (mb > 1) return [mb.toFixed(2), 'MB'];
  return [kb.toFixed(2), 'KB'];
}

function colorMapper(value: number) {
  if (value < 50) return 'success';
  if (value < 75) return 'warning';
  return 'error';
}

function stateMapper(state?: boolean) {
  if (state === false) return <span className="text-warning">No</span>;
  if (state === true) return <span className="text-success">Yes</span>;
  return <span className="text-error">Error</span>;
}
