import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme { 
    colors: {
      primary: {
        normal: string;
        light: string;
      }

      mid1: string;

      secondary: {
        normal: string;
        light: string;
      }

      mid2: string;

      font: {
        normal: string;
        light: string;
      }

      success: string;
      info: string;
      warning: string;
      danger: string;

      background: string;
    },

    breakpoints: string[];
    displays: string[];
    space: number[];

    mediaQueries: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
  
    formatDisplay: (num: number) => string | number,
  }
}
