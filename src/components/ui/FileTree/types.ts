type TreeData = {
  key: string;
  name: string;
  type: string;
  metadata: {
    created_at: Date,
    updated_at: Date,
    size: number,
  }
}

interface FileTreeComponentProps {
  onFileSelect: () => unknown;
  onFolderSelect: () => unknown;
  data: Array<TreeData>;
}

interface FileTreeItemProps {
  data: TreeData
}

export type { TreeData, FileTreeComponentProps, FileTreeItemProps };
