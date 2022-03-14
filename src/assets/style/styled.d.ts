import 'styled-components';
import { Breakpoints, ColorScale, PaletteMode } from './types';

declare module 'styled-components' {
  export interface DefaultTheme {
    /** 
     * Base font size for the application, in pixels, 
     * helpfull to derived font sizes relative to the base size.
     */
    baseFontSize: number;
    /** Name of the color palette in use */
    mode: PaletteMode;

    /**
     * The object containing all the colors of the current palette in use.
     * The keys in this object can be used to directly style components based on the style.
     */
    palette: {
      /**
       * Primary palette color, this object represents the diferent variations of the primary
       * color.
       */
      primary: ColorScale & {
        light: string;
        dark: string;
        contrastText: string;
      };

      /**
       * Secondary color in the palette, this object represents the diferent variations of the primary
       * color.
       * Use to complement the primary color.
       */
      secondary: ColorScale & {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      
      /** Color of the divider component */
      divider: string;

      /** Variations of the primary color, in dark tone */
      primaryDark: ColorScale;

      /** Colors used in the background of the app */
      background: {
        /** Default color for background, use for main background and layout */
        default: string;

        /** Paper version of the default color, use on components */
        paper: string;
      };

      /** Color variations for the text in the application */
      text: {
        primary: string;
        secondary: string;
        /** Variations for buttons or icons that are disabled */
        disabled: string;
        /** Default colors for the icons */
        icon: string;
      };

      /** Grey scale shortcut */
      grey: ColorScale;

      /** Common colors shared across the palette variations */
      common: {
        black: string;
        white: string;
      };

      /** Error color scale, use to style components that represents errors states or danger (red) */
      error: ColorScale & {
        light: string;
        dark: string;
        contrastText: string;
      };

      /** Success color scale, use to style components that represents success actions or state (green) */
      success: ColorScale & {
        light: string;
        dark: string;
        contrastText: string;
      };
      
      /** 
       * Warning color scale, use to style components that 
       * represents actions or state that the user must pay attention to (yellow)
       */
      warning: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };

      /**
       * Information color scale, use to style components that are informative, soft color.
       * (Blue)
       */
      info: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };

      /** Minimun threshold among color and text contrast */
      contrastThreshold: number,

      /** Offset of tonalities across the color scale */
      tonalOffset: number,

      /** Color style certain actions */
      action: {
        active: string;
        activatedOpacity: number;

        hover: string;
        hoverOpacity: number;

        selected: string;
        selectedOpacity: number;

        disabled: string;
        disabledBackground: string;
        disabledOpacity: number;

        focus: string;
        focusOpacity: number;
      };
    };

    /** 
     * Breakpoints used to fire media queries, among other styles options.
     * Are separated into the same categories as the breakpoints from bootstrap.
     */
    breakpoints: {
      /** Keys of the breakpoints, i.e., name of the breakpoints to make queries in the value prop */
      keys: Array<Breakpoints>;

      /** Value of the breakpoints described, i.e., size of width of the sceen to check breakpoint */
      values: { [key in Breakpoints]: number; };

      /** Unit of the values in the values prop */
      unit: string;
    };

    /** Radius of **all** the borders in the style, in pixels */
    borderRadius: number

    /** 
     * Media queries shortcut, to insert into the stylesheet.
     * 
     * Has the shape of @media (min-width: ...px).
     */
    mediaQueries: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };

    /** Array of multiple levels of shadows that can be applied to style components */
    shadows: Array<string>;

    /** 
     * Store all the transitions in a single style, allowing to standarize the animations
     * used across the app.
     */
    transitions: {
      /** Cubic Beizer representation of the most used transition types */
      easing: {
        easeInOut: string;
        easeOut: string;
        easeIn: string;
        sharp: string;
      };

      /** Most used durations of the animations, in miliseconds */
      duration: {
        shortest: number;
        shorter: number;
        short: number;
        standard: number;
        complex: number;
        enteringScreen: number;
        leavingScreen: number;
      };
    };

    /**
     * z-index value of some of the most common components that must overlap other components,
     * use to check the z-index value of some components, and make sure your style either doesn't
     * overlap them, or do overlap them.
     * 
     * Props are in number, so adding is ok.
     */
    zIndex: {
      appBar: number;
      drawer: number;
      modal: number;
      snackbar: number;
      tooltip: number;
      message: number;
      contextMenu: number;
    };


    /** 
     * Generate unified spacing, in pixels, derived from the base spacing.
     * The multiplier is how much spacing you want to use, 2 for double the spacing,
     * 0.5 for half the spacing, and so on.
     * 
     * Note: Negative numbers can be used to.
     * @param multiple The multiplier of the spacing.
     * @param withUnit Whether or not return the 'px' unit with the multipler.
     * @returns The spacing, in number, or a string with the spacing and the unit, depending on the 
     * `withUnit` flag.
     */
    spacing: (multiplier: number, withUnit?: boolean) => number | string;
  }
}
