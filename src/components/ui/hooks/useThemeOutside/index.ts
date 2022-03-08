import { themeObserver } from "assets/style/ThemeProvider";
import Console from "lib/Console";
import { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";

/**
 * Hook to get the current theme in the global context, but without acctually
 * rendering the component inside the Globall <App />, this way, an extra
 * UI component can be attached outside via ReactDOM.render, and still get the
 * current theme value. This hook updates along with the theme provider.
 * 
 * @returns The current theme used in the global app context
 */
const useThemeOutside = (): DefaultTheme => {
  const [theme, setTheme] = useState(themeObserver.currentValue);

  useEffect(() =>{
    const listener = (theme: DefaultTheme) => setTheme(theme);
    themeObserver.subscribe(listener);

    return () => {
      Console.log('Cleanup function in useThemeOutside hook');
      themeObserver.unsubscribe(listener);
    };
  }, []);
  

  return theme;  
};

export { useThemeOutside };
