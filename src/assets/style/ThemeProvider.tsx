import { Observer } from 'lib/Observer';
import { useEffect } from 'react';
import { ThemeProvider as BaseThemeProvider, DefaultTheme } from 'styled-components';
import { dark } from './theme';

interface Props {
  children?: React.ReactNode | undefined;
  theme: DefaultTheme;
}

/**
 * Theme observer, usefull to get the current theme with having to relay on the
 * Theme Provider.
 * 
 * The listeners will be called with the new theme as soon as the Theme Provider is updated.
 */
const themeObserver = new Observer<DefaultTheme>(dark, true);

const ThemeProvider = ({ theme, children }: Props): JSX.Element => {

  useEffect(() => themeObserver.updateValue(theme), [theme]);

  return(
    <BaseThemeProvider theme={theme}>
      {children}
    </BaseThemeProvider>
  );
};


export { ThemeProvider, themeObserver };
