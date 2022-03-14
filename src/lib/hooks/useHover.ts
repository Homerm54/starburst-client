// Code from https://gist.github.com/gragland/a32d08580b7e0604ff02cb069826ca2f

import { useState, useCallback, useRef } from "react";

/**
 * Detect whether the mouse is hovering an element. 
 * @returns A ref to reference the element to be watched and a boolean value indicating 
 * whether the element with that ref is currently being hovered, and the raw reference to use as `ref.current`.
 */
function useHover<T extends HTMLElement>(): [(node: any) => void, boolean, React.MutableRefObject<T | null>] {
  const [value, setValue] = useState(false);
	
  // Wraped in useCallback to allow using as dependencies
  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  // Keep track of the last node passed to callbackRef
  // so we can remove its event listeners in case the ref has changed.
  const ref = useRef <T | null>(null);
  
  // Use a callback ref instead of useEffect so that event listeners
  // get changed in the case that the returned ref gets added to
  // a different element later. With useEffect, changes to ref.current
  // wouldn't cause a rerender and thus the effect would run again.
  const callbackRef = useCallback(
    node => {
      // Remove listeners before changing to new node
      if (ref.current) {
        ref.current.removeEventListener("mouseover", handleMouseOver);
        ref.current.removeEventListener("mouseout", handleMouseOut);
      }

      ref.current = node;
      // In case node is not null, add the listeners
      if (ref.current) {
        ref.current.addEventListener("mouseover", handleMouseOver);
        ref.current.addEventListener("mouseout", handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, value, ref];
}

export { useHover };
