import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadcrumContainer, BreadcrumItem, FordwardSlashStyle } from "./style";
import { BreadcrumProps, Path } from "./types";

function Breadcrums({
  data,
  separator,
  onSelection,
  onHome,
  home = false,
  noParse = false,
}: BreadcrumProps): JSX.Element {
  if (noParse && typeof data === 'string') throw Error("noParse prop and data as string isn't allowed");
  const path = noParse ? data as Array<Path> : parsePath(data, separator);

  const handleClick = (ix: number) => {
    // Call update on selected path when the one clicked isn't the one already active
    if (onSelection && ix !== path.length -1) {
      onSelection(
        ix, 
        `${separator}${path[ix]}`,
        `${separator}${path.slice(undefined, ix + 1).join(separator)}`
      );
    }
  };

  const homeComponent = home && (
    <BreadcrumItem $isActive={path.length === 0} onClick={onHome}>
      { home === true? <FontAwesomeIcon icon="folder" /> : home }
    </BreadcrumItem>
  );

  return(
    <BreadcrumContainer>
      {homeComponent}

      {
        path.map((label, ix) => (
          <Fragment key={ix}>
            <FordwardSlashStyle>{separator}</FordwardSlashStyle>
            <BreadcrumItem $isActive={ix === (path.length - 1)} onClick={() => handleClick(ix)}>
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
