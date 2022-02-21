/** Breakpoints available across the app */
type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  main: string;
};

type PaletteMode = 'dark' | 'light';

export type { Breakpoints, ColorScale, PaletteMode };
