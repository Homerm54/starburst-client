/** The path value (string) */
type Path = string;
/** Array of paths that the Breadcrum will render */
type Data = Array<Path> | Path;

interface BreadcrumProps {
  /** 
   * The path that will be show, splitted in an array.
   * **Note:** It's expected that the items of the array starts with the separator, 
   * futhermore, the the separator isn't present in path, othersie, pass the noParse prop. 
   */
  entries: Data;
  /** Max number of breadcrums, will compress in the middle */
  maxItems?: number;
  /** Separator between breadcrums, ex: - | > | / | etc */
  separator: string;
  /** Flag to show home icon (a folder by default), and fire onHome caller */
  home?: boolean | React.ReactNode;
  /** 
   * Flag to either parse, and strip out the separator, pass false if requiered to let strings as they are.
   * Left true in case simple string is passed, because **must** be called.
   */
  noParse?: boolean;
  /** 
   * Fired when selecting an item in the breadcrum, and react according to the selection.
   * @param ix The index of the item selected, starting at 0 index (array like).
   * @param key The key (name displayed) of the item selected.
   * @param wholePath The whole path selected, from 0 index, up to the one selected.
   * 
   * @example 
   *  data = ['/home', '/code', '/image']
   * 
   *  On `/code` item selected:
   *  ix: 1
   *  key: /code -> With separator
   *  wholePath: /home/code
   */
  onSelection?: (ix: number, key: Path, wholePath: string) => unknown;
  /** Fired when the home item is clicked (single click) */
  onHome?: () => unknown;
}

interface BreadcrumItemStyle {
  $isActive: boolean;
}

export type { BreadcrumProps, Data, BreadcrumItemStyle, Path };
