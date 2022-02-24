import { Breakpoints } from "assets/style/types";
import { useLayoutEffect, useState } from "react";
import { useTheme } from "styled-components";

const useMediaQueries: () => Array<Breakpoints> = () => {
  const theme = useTheme();
  const [matches, setMatches] = useState(['xs' as Breakpoints]);

  const addNewMatch = (breakpoint: Breakpoints) => {
    setMatches((lastState) => {
      if (lastState.indexOf(breakpoint) === -1) {
        return [...lastState, breakpoint];
      }

      return lastState;
    });
  };

  const removeMatch = (breakpoint: Breakpoints) => {
    setMatches((lastState) => lastState.filter(a => a !== breakpoint));
  };

  useLayoutEffect(() => {
    const listeners: Array<{ mql: MediaQueryList, listener: () => unknown }> = [];
    theme.breakpoints.keys.forEach((key) => {
      const mql = window.matchMedia(`(min-width: ${theme.breakpoints.values[key]}px)`);
      const listener = () => {
        if (mql.matches) addNewMatch(key);
        else removeMatch(key);
      };

      mql.addEventListener('change', listener);
      listener();
      listeners.push({ mql, listener });
    });

    return () => {
      listeners.forEach(({ mql, listener }) => {
        mql.removeEventListener('change', listener);
      });
    };
    
  }, []);

  return matches;
};


export { useMediaQueries };
