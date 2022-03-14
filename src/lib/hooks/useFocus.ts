import { useCallback, useRef, useState } from "react";

/**
 * 
 * @param defaultState Whether to start the hook as focused
 * @returns A function to set the ref, this allows to change ref without problem, a boolean value, 
 * representing whether the element is focused, and the raw reference to use as `ref.current`.
 */
function useFocus<T extends HTMLElement>(defaultState = false): [(node: any) => void, boolean, React.MutableRefObject<T | null>] {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState(defaultState);
  
  const callbackRef = useCallback(
    node => {
      const onFocus = () => setState(true);
      const onBlur = () => setState(false);

      if (ref.current) {
        ref.current.removeEventListener('focus', onFocus);
        ref.current.removeEventListener('blur', onBlur);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener('focus', onFocus);
        ref.current.addEventListener('blur', onBlur);
      }
    },
    []
  );

  return [callbackRef, state, ref];
}

export { useFocus };
