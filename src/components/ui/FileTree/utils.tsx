import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Transform the any size, in bytes, into huam redable format.
 * @param size The size of the file, **in bytes**.
 * @param precision The number of decimals after the comma.
 * @returns Array with the number, and the unit of said number [B | KB | MB | GB | TB]
 */
function SizeConverter(size: number, precision = 2): [string, string] {
  if (size >= 1e9) return [(size / 1e12).toFixed(precision), 'TB']; // TB TIER
  else if (size >= 1e6) return [(size / 1e9).toFixed(precision), 'GB'];// GB TIER
  else if (size >= 1e3) return [(size / 1e6).toFixed(precision), 'MB']; // MB TIER
  else if (size >= 1000) return [(size / 1e3).toFixed(precision), 'KB']; // KB TIER
  else return [`${size}`, 'B'];
}


/**
 * Map a representative icon to the type file.
 * @param type The type of file to be mapped.
 * @return The Fontawesome icon related to the type file.
 */
function IconMapper(type: string): JSX.Element {
  switch (type) {
  // Specific types
  case 'folder': return <FontAwesomeIcon icon="folder" className="text-info" />;
  case 'application/pdf': return <FontAwesomeIcon icon="file-pdf" className="text-info" />;
  case 'application/javascript': return <FontAwesomeIcon icon={['fab', 'js-square']} className="text-warning" />;
  case 'application/zip': return <FontAwesomeIcon icon="file-zipper" className="text-info" />;
      
  case 'text/markdown': return <FontAwesomeIcon icon={['fab', 'markdown']} className="text-info" />;
  case 'text/css': return <FontAwesomeIcon icon={['fab', 'css3']} className="text-info" />;
  case 'text/typescript': return <FontAwesomeIcon icon="file-code" className="text-info" />;
  case 'text/html': return <FontAwesomeIcon icon={['fab', 'html5']} className="text-info" />;
  case 'text/csv': return <FontAwesomeIcon icon="file-csv" className="text-success" />;
    
    // Broader types
  default: {
    if (/(text\/*)\w+/g.test(type)) {
      return <FontAwesomeIcon icon="file-lines" className="text-info" />;
    } else if (/(image\/*)\w+/g.test(type)) {
      return <FontAwesomeIcon icon="file-image" className="text-info" />;
    } else if (/(video\/*)\w+/g.test(type)) {
      return <FontAwesomeIcon icon="file-video" className="text-info" />;
    }  else {
      return <FontAwesomeIcon icon="file" className="text-info" />;
    }
  }
  }
}

export { SizeConverter, IconMapper };
