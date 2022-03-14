import { useCallback, useEffect, useRef } from "react";

type listener = (e: MouseEvent | TouchEvent) => unknown;

/**
 * Hook to encapsulate the logic related to check whether a click was done inside or outside a
 * given component.
 * 
 * @param handler The function that will be called when a click outside of the element is detected.
 * @return a useRef instance, that must be passed to the top parent component that you want to watch and
 * see if clicked outside or not.
 */
function useClickOutside<T extends HTMLElement>(handler: listener) {
  const ref = useRef<T | null>(null);
  const memoizedHandler = useCallback(handler, []);

  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (
          !ref.current // In case the ref wasn't set
          || event.target === ref.current // the click event originated in the parent
          // or was clicked inside the parent (i.e., a descendant and the parent **contains** it)
          || ref.current.contains(event.target as Node)
        ) {
          return; // then there's no click outside, so avoid calling the handler
        }

        memoizedHandler(event);
      };

      // Event fired on click release
      document.addEventListener("mouseup", listener);
      document.addEventListener("touchend", listener);

      return () => {
        document.removeEventListener("mouseup", listener);
        document.removeEventListener("touchend", listener);
      };
    },
    [ref, memoizedHandler] // ref and handler effect dependencies
  );

  return ref;
}

export { useClickOutside };
