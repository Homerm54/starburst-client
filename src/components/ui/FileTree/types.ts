import React from "react";

type ErrorProp = {
  handleClick: () => unknown;
  text: string;
}

/**
 * Data value that the File Tree will handle.
 * This value is the representation of each item that the file tree will handle,
 * both folders and files.
 */
type TreeData = {
  /** Unique key representinog the item, unique for both folders and files, **never** repeated */
  key: string;
  /** Name of the item, with separator for folder, and with file extention for files */
  name: string;
  /** Type of item, folder, and mime-type for files */
  type: string;
  /** Subfolders inside the current folder **only valid for folders** */
  subfolders?: Array<TreeData>;
  /** Metadata of the item */
  metadata: {
    /** Date when the item was created */
    created_at: Date,
    /** Last time the item was updated (server update, if change outside app, will reflect) */
    updated_at: Date,
    /** Optional item with the size of the item, **in bytes** */
    size?: number, // Optional for file type I guess
  }
}

type NativeProps = React.ComponentPropsWithoutRef<'div'>;

interface FileTreeComponentProps extends Omit<NativeProps, 'child' | 'onContextMenu'> {
  /** 
   * Fired when a file is selected (selected is fired on double click).
   * Note: Double Click will block single click.
   * @param key The key of the file (item) selected.
   */
  onFileSelect?: (key: string) => unknown;
  /**
   * Fired when a folder is selected (selected is fired on double click).
   * Note: Double Click will block single click.
   * @param key The key of the folder (item) selected.
   */
  onFolderSelect?: (key: string) => unknown;
  /** Fired when the back item is selected (the one with the folder and ..). */
  onBack?: () => unknown;
  /** Function called when rigth clicked an item (file or folder) */
  onContextMenu?: ((key: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => unknown) | undefined;
  /** Array of Tree Data items (folder and files) that will be rendered on the list */
  data: Array<TreeData>;
  /** Whether to show the entry to call onBack, or not */
  backEntry?: boolean;

  // STATES
  /** Whether to show a loading indicator or not */
  loading?: boolean;
  /** 
   * Whether to show an error banner.
   * If boolean, will only show an icon, on object, will show an icon along with
   * a button to ask for refresh.
   */
  error?: boolean | ErrorProp;
}

interface FileTreeItemProps extends Omit<NativeProps, 'child' | 'onSelect' | 'onContextMenu'> {
  /** Tree data item (file or folder) to render */
  data: TreeData;
  /** Fired when the given item (file or folder) is selected, on double click */
  onSelect?: ((key: string) => unknown) | undefined;
  /** Function called when rigth clicked an item (file or folder) */
  onContextMenu?: ((key: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => unknown) | undefined;
}

export type { TreeData, FileTreeComponentProps, FileTreeItemProps };
