import { Styles } from "./style";
import { FileTreeItemProps, FileTreeComponentProps } from "./types";

function FileTree({
  data,
  onFileSelect,
  onFolderSelect,
}: FileTreeComponentProps): JSX.Element {

  return (
    <Styles.Contianer>
      {data.map((item) => <FileTreeItem key={item.key} data={item} />)}
    </Styles.Contianer>
  );
}

function FileTreeItem({ data }: FileTreeItemProps): JSX.Element {

  return(
    <Styles.Item>
      {data.name}
    </Styles.Item>
  );
}


export { FileTree, FileTreeItem };
