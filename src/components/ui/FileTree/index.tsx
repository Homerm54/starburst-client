import { Empty, Styles } from "./style";
import { FileTreeItemProps, FileTreeComponentProps } from "./types";
import { Row, Col } from '../Grid';
import { IconMapper, SizeConverter } from "./utils";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import LoadingIcon from '../Loading';

function Loading() {
  return <Styles.Loading><LoadingIcon size={100} hint="Loading files" /></Styles.Loading>;
}

function EmptyFolder() {
  return (
    <Empty.Contianer>
      <Empty.Icon>
        <FontAwesomeIcon icon="box-archive" size="2x" />
      </Empty.Icon>

      <Empty.Text>
        This folder is empty
      </Empty.Text>
    </Empty.Contianer>
  );
}

function Error() {
  return (
    <Empty.Contianer>
      <Empty.Icon>
        <FontAwesomeIcon icon="bug" size="3x" className="text-error" />
      </Empty.Icon>

      <Empty.Text>
        An error ocurred while loading the folder, refresh
      </Empty.Text>
    </Empty.Contianer>
  );
}

/**
 * TODO
 * Get metadata for header
 * Get data from the header metadata
 */
function FileTree({
  data,
  onBack,
  backEntry,
  onFileSelect,
  onFolderSelect,
  onContextMenu,
  // STATES
  error,
  loading,
}: FileTreeComponentProps): JSX.Element {

  const content = data.length === 0 
    ? <EmptyFolder />
    : data.map((item) => (
      <FileTreeItem
        onContextMenu={onContextMenu}
        data={item}
        key={item.key}
        onSelect={
          item.type === 'folder'
            ? onFolderSelect
            : onFileSelect
        }
      />
    ));
  
  const handleBack = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.detail === 2 && onBack) onBack();
  };

  if (error) {
    return (
      <Styles.Contianer>
        <FileTreeHeader />
        <Error />
      </Styles.Contianer>
    );
  }

  if (loading) {
    return (
      <Styles.Contianer>
        <FileTreeHeader />
        <Loading />
      </Styles.Contianer>
    );
  }

  return (
    <Styles.Contianer>
      <FileTreeHeader />

      <Styles.Item>
        {
          backEntry && (
            <Styles.Name onClick={handleBack}>
              <Styles.NameIcon>{IconMapper('folder')}</Styles.NameIcon>..
            </Styles.Name>
          )
        }
      </Styles.Item>

      {content}
    </Styles.Contianer>
  );
}

function FileTreeHeader(): JSX.Element {
  return (
    <Row className="mb-3">
      <Col xs={5}>Name</Col>
      <Col xs={2}>Type</Col>
      <Col xs={3}>Created At</Col>
      <Col xs={2}>Size</Col>
    </Row>
  );
}

function FileTreeItem({ data, onSelect, onClick, onContextMenu }: FileTreeItemProps): JSX.Element {
  const time = useRef<number | undefined>(undefined);
  const size = data.metadata.size ? SizeConverter(data.metadata.size) : ['N/A', ''];

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    clearTimeout(time.current);
    if (e.detail === 1) {
      time.current = setTimeout(() => { if (onClick) onClick(e); }, 200) as any;
    } else if (e.detail === 2) {
      if(onSelect) onSelect(data.key);
    }
  };

  return (
    <Styles.Item
      as={Row}
      onContextMenu={(e: unknown) => onContextMenu && onContextMenu(data.key, e as React.MouseEvent<HTMLDivElement, MouseEvent>)}
    >
      <Styles.Name as={Col} xs={5} onClick={handleClick}>
        <Styles.NameIcon>{IconMapper(data.type)}</Styles.NameIcon>
        {data.name}
      </Styles.Name>

      <Col xs={2}>{data.type}</Col>
      <Col xs={3}>{format(data.metadata.created_at, 'E d/M/y')}</Col>
      <Col xs={2}>{size[0]} {size[1]}</Col>
    </Styles.Item>
  );
}


export { FileTree, FileTreeItem };
