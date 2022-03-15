import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadcrumContainer, BreadcrumItem, FordwardSlashStyle } from "./style";
import { BreadcrumProps, Path } from "./types";

function Breadcrums({
  entries: data,
  separator,
  onSelection,
  onHome,
  home = false,
  noParse = false,
  maxItems,
}: BreadcrumProps): JSX.Element {
  if (noParse && typeof data === 'string') throw Error("noParse prop and data as string isn't allowed");

  // Data parse and collapse
  const path = noParse ? data as Array<Path> : parsePath(data, separator);
  const collapse = maxItems && path.length > maxItems;
  const trimmedPath = collapse ? path.slice(path.length - maxItems) : path;

  const handleClick = (ix: number) => {
    // Call update on selected path when the one clicked isn't the one already active
    if (onSelection && ix !== trimmedPath.length -1) {
      onSelection(
        collapse ? (ix + path.length - maxItems) : ix, 
        `${separator}${trimmedPath[ix]}`,
        `${separator}${trimmedPath.slice(undefined, ix + 1).join(separator)}`
      );
    }
  };

  const handleCollapsedClick = () => {
    if (onSelection && collapse) {
      const ix = path.length - maxItems - 1; // -1 because will index and .length brings +1
      onSelection(
        ix, 
        `${separator}${path[ix]}`,
        `${separator}${path.slice(undefined, ix + 1).join(separator)}`
      );
    }
  };

  const homeComponent = (
    <BreadcrumItem $isActive={path.length === 0} onClick={onHome}>
      { home === true ? <FontAwesomeIcon icon="folder" /> : home }
    </BreadcrumItem>
  );

  const collapsedElement = (
    <>
      <FordwardSlashStyle>{separator}</FordwardSlashStyle>
      <BreadcrumItem $isActive={false} onClick={handleCollapsedClick}>
        <FontAwesomeIcon icon="ellipsis" />
      </BreadcrumItem>
    </>
  );

  return(
    <BreadcrumContainer>
      {home && homeComponent}
      {collapse && collapsedElement}

      {
        trimmedPath.map((label, ix) => (
          <Fragment key={ix}>
            <FordwardSlashStyle>{separator}</FordwardSlashStyle>
            <BreadcrumItem
              $isActive={ix === (trimmedPath.length - 1)}
              onClick={() => handleClick(ix)}
            >
              {label}
            </BreadcrumItem>
          </Fragment>
        ))
      }
    </BreadcrumContainer>
  );
}

export { Breadcrums };

// ---------- UTIL FUNC
function parsePath(path: Array<Path> | Path, separator: string): Array<Path> {
  const path1 = typeof path === 'string' ? path : path.join('');
  return path1.split(separator).slice(1); // .slice to drop initial empty string
}
