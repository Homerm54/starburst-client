import 'styled-components';

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

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";

type PaletteMode = 'dark' | 'light';

declare module 'styled-components' {
  export interface DefaultTheme {
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

    space: number[];

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
    };
  }
}


/**
 * Base style props:
 * 
 * {
    "direction": "ltr",
    "palette": {
        "mode": "dark",
        "primary": {
            "50": "#F0F7FF",
            "100": "#C2E0FF",
            "200": "#99CCF3",
            "300": "#66B2FF",
            "400": "#3399FF",
            "500": "#007FFF",
            "600": "#0072E5",
            "700": "#0059B2",
            "800": "#004C99",
            "900": "#003A75",
            "main": "#dcedc8",
            "light": "#66B2FF",
            "dark": "#0059B2",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "divider": "rgba(194, 224, 255, 0.08)",
        "primaryDark": {
            "50": "#E2EDF8",
            "100": "#CEE0F3",
            "200": "#91B9E3",
            "300": "#5090D3",
            "400": "#265D97",
            "500": "#1E4976",
            "600": "#173A5E",
            "700": "#132F4C",
            "800": "#001E3C",
            "900": "#0A1929",
            "main": "#5090D3"
        },
        "background": {
            "default": "#001E3C",
            "paper": "#0A1929"
        },
        "common": {
            "black": "#1D1D1D",
            "white": "#fff"
        },
        "text": {
            "primary": "#fff",
            "secondary": "#B2BAC2",
            "disabled": "rgba(255, 255, 255, 0.5)",
            "icon": "rgba(255, 255, 255, 0.5)"
        },
        "grey": {
            "50": "#F3F6F9",
            "100": "#E7EBF0",
            "200": "#E0E3E7",
            "300": "#CDD2D7",
            "400": "#B2BAC2",
            "500": "#A0AAB4",
            "600": "#6F7E8C",
            "700": "#3E5060",
            "800": "#2D3843",
            "900": "#1A2027",
            "A100": "#f5f5f5",
            "A200": "#eeeeee",
            "A400": "#bdbdbd",
            "A700": "#616161"
        },
        "error": {
            "50": "#FFF0F1",
            "100": "#FFDBDE",
            "200": "#FFBDC2",
            "300": "#FF99A2",
            "400": "#FF7A86",
            "500": "#FF505F",
            "600": "#EB0014",
            "700": "#C70011",
            "800": "#94000D",
            "900": "#570007",
            "main": "#EB0014",
            "light": "#FF99A2",
            "dark": "#C70011",
            "contrastText": "#fff"
        },
        "success": {
            "50": "#E9FBF0",
            "100": "#C6F6D9",
            "200": "#9AEFBC",
            "300": "#6AE79C",
            "400": "#3EE07F",
            "500": "#21CC66",
            "600": "#1DB45A",
            "700": "#1AA251",
            "800": "#178D46",
            "900": "#0F5C2E",
            "main": "#1DB45A",
            "light": "#6AE79C",
            "dark": "#1AA251",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "warning": {
            "50": "#FFF9EB",
            "100": "#FFF3C1",
            "200": "#FFECA1",
            "300": "#FFDC48",
            "400": "#F4C000",
            "500": "#DEA500",
            "600": "#D18E00",
            "700": "#AB6800",
            "800": "#8C5800",
            "900": "#5A3600",
            "main": "#DEA500",
            "light": "#FFDC48",
            "dark": "#AB6800",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "secondary": {
            "main": "#006064",
            "light": "rgb(51, 127, 131)",
            "dark": "rgb(0, 67, 70)",
            "contrastText": "#fff"
        },
        "info": {
            "main": "#29b6f6",
            "light": "#4fc3f7",
            "dark": "#0288d1",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "contrastThreshold": 3,
        "tonalOffset": 0.2,
        "action": {
            "active": "#fff",
            "hover": "rgba(255, 255, 255, 0.08)",
            "hoverOpacity": 0.08,
            "selected": "rgba(255, 255, 255, 0.16)",
            "selectedOpacity": 0.16,
            "disabled": "rgba(255, 255, 255, 0.3)",
            "disabledBackground": "rgba(255, 255, 255, 0.12)",
            "disabledOpacity": 0.38,
            "focus": "rgba(255, 255, 255, 0.12)",
            "focusOpacity": 0.12,
            "activatedOpacity": 0.24
        }
    },
    "shape": {
        "borderRadius": 10
    },
    "unstable_strictMode": true,
    "nprogress": {
        "color": "#3399FF"
    },
    "props": {
        "MuiBadge": {
            "overlap": "rectangular"
        }
    },
    "mixins": {
        "toolbar": {
            "minHeight": 56,
            "@media (min-width:0px) and (orientation: landscape)": {
                "minHeight": 48
            },
            "@media (min-width:600px)": {
                "minHeight": 64
            }
        }
    },
    "shadows": [
        "none",
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
        "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
        "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
        "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
        "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
        "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
        "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
        "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
        "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
        "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
        "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
        "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
    ],
    "transitions": {
        "easing": {
            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
        },
        "duration": {
            "shortest": 150,
            "shorter": 200,
            "short": 250,
            "standard": 300,
            "complex": 375,
            "enteringScreen": 225,
            "leavingScreen": 195
        }
    },
    "zIndex": {
        "mobileStepper": 1000,
        "speedDial": 1050,
        "appBar": 1100,
        "drawer": 1200,
        "modal": 1300,
        "snackbar": 1400,
        "tooltip": 1500
    }
}
 */

/**
 * Typography code:
 * 
 * "typography": {
        "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
        "fontFamilyCode": "Consolas,Menlo,Monaco,Andale Mono,Ubuntu Mono,monospace",
        "fontFamilyTagline": "\"PlusJakartaSans-ExtraBold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
        "fontFamilySystem": "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
        "fontWeightExtraBold": 800,
        "h1": {
            "fontFamily": "\"PlusJakartaSans-ExtraBold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
            "fontWeight": 800,
            "lineHeight": 1.1142857142857143
        },
        "h2": {
            "fontFamily": "\"PlusJakartaSans-ExtraBold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
            "fontWeight": 800,
            "lineHeight": 1.2222222222222223,
            "color": "#E7EBF0"
        },
        "h3": {
            "fontFamily": "\"PlusJakartaSans-Bold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "2.25rem",
            "lineHeight": 1.2222222222222223,
            "letterSpacing": 0.2,
            "fontWeight": 400
        },
        "h4": {
            "fontFamily": "\"PlusJakartaSans-Bold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "1.75rem",
            "lineHeight": 1.5,
            "letterSpacing": 0.2,
            "fontWeight": 400
        },
        "h5": {
            "fontFamily": "\"PlusJakartaSans-Bold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "1.5rem",
            "lineHeight": 1.5,
            "letterSpacing": 0.1,
            "color": "#66B2FF",
            "fontWeight": 400
        },
        "h6": {
            "fontSize": "1.25rem",
            "lineHeight": 1.5,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 500
        },
        "button": {
            "textTransform": "initial",
            "fontWeight": 700,
            "letterSpacing": 0,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "0.875rem",
            "lineHeight": 1.75
        },
        "subtitle1": {
            "fontSize": "1.125rem",
            "lineHeight": 1.3333333333333333,
            "letterSpacing": 0,
            "fontWeight": 500,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\""
        },
        "body1": {
            "fontSize": "1rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 400
        },
        "body2": {
            "fontSize": "0.875rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 400
        },
        "caption": {
            "display": "inline-block",
            "fontSize": "0.75rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontWeight": 700,
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\""
        },
        "htmlFontSize": 16,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightBold": 700,
        "subtitle2": {
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 500,
            "fontSize": "0.875rem",
            "lineHeight": 1.57
        },
        "overline": {
            "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontWeight": 400,
            "fontSize": "0.75rem",
            "lineHeight": 2.66,
            "textTransform": "uppercase"
        }
    },
 */

/**
 * Component specific props
 * 
 * "components": {
        "MuiCssBaseline": {
            "defaultProps": {
                "enableColorScheme": true
            }
        },
        "MuiButtonBase": {
            "defaultProps": {
                "disableTouchRipple": true
            }
        },
        "MuiButton": {
            "defaultProps": {
                "disableElevation": true
            },
            "styleOverrides": {
                "sizeLarge": {
                    "padding": "0.875rem 1rem",
                    "fontSize": "1rem",
                    "lineHeight": 1.3125,
                    "letterSpacing": 0,
                    "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
                    "fontWeight": 700
                },
                "sizeSmall": {
                    "padding": "4px 8px",
                    "marginLeft": "-8px"
                },
                "containedPrimary": {
                    "backgroundColor": "#007FFF",
                    "color": "#fff"
                }
            },
            "variants": [
                {
                    "props": {
                        "variant": "code"
                    },
                    "style": {
                        "color": "#B2BAC2",
                        "border": "1px solid",
                        "borderColor": "#265D97",
                        "backgroundColor": "#132F4C",
                        "fontFamily": "Consolas,Menlo,Monaco,Andale Mono,Ubuntu Mono,monospace",
                        "fontWeight": 400,
                        "fontSize": "0.8125rem",
                        "lineHeight": 1.5,
                        "letterSpacing": 0,
                        "WebkitFontSmoothing": "subpixel-antialiased",
                        "&:hover, &.Mui-focusVisible": {
                            "borderColor": "#dcedc8",
                            "backgroundColor": "#173A5E",
                            "& .MuiButton-endIcon": {
                                "color": "#66B2FF"
                            }
                        },
                        "& .MuiButton-startIcon": {
                            "color": "#B2BAC2"
                        },
                        "& .MuiButton-endIcon": {
                            "display": "inline-block",
                            "position": "absolute",
                            "right": 0,
                            "marginRight": 10,
                            "color": "#B2BAC2"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "link"
                    },
                    "style": {
                        "fontSize": "0.875rem",
                        "fontWeight": 700,
                        "color": "#66B2FF",
                        "mb": 1,
                        "& svg": {
                            "ml": -0.5
                        }
                    }
                }
            ]
        },
        "MuiIconButton": {
            "variants": [
                {
                    "props": {
                        "color": "primary"
                    },
                    "style": {
                        "height": 34,
                        "width": 34,
                        "border": "1px solid #132F4C",
                        "borderRadius": 10,
                        "color": "#66B2FF",
                        "&:hover": {
                            "borderColor": "#173A5E",
                            "background": "rgba(19, 47, 76, 0.4)"
                        }
                    }
                }
            ]
        },
        "MuiMenu": {
            "styleOverrides": {
                "paper": {
                    "mt": 0.5,
                    "minWidth": 160,
                    "elevation": 0,
                    "color": "#B2BAC2",
                    "backgroundImage": "none",
                    "bgColor": "#0A1929",
                    "border": "1px solid #132F4C",
                    "& .MuiMenuItem-root": {
                        "fontSize": "0.875rem",
                        "fontWeight": 500,
                        "&:hover": {
                            "backgroundColor": "rgba(19, 47, 76, 0.4)"
                        },
                        "&:focus": {
                            "backgroundColor": "rgba(19, 47, 76, 0.4)"
                        },
                        "&.Mui-selected": {
                            "fontWeight": 500,
                            "color": "#66B2FF",
                            "backgroundColor": "#132F4C"
                        }
                    }
                }
            }
        },
        "MuiPopover": {
            "styleOverrides": {
                "paper": {
                    "boxShadow": "0px 4px 20px rgba(0, 0, 0, 0.5)"
                }
            }
        },
        "MuiContainer": {
            "styleOverrides": {
                "root": {
                    "@media (min-width:900px)": {
                        "paddingLeft": "16px",
                        "paddingRight": "16px"
                    }
                }
            }
        },
        "MuiDivider": {
            "styleOverrides": {
                "root": {
                    "borderColor": "rgba(194, 224, 255, 0.08)"
                }
            }
        },
        "MuiLink": {
            "defaultProps": {
                "underline": "none"
            },
            "styleOverrides": {
                "root": {
                    "color": "#66B2FF",
                    "fontWeight": 700,
                    "display": "inline-flex",
                    "alignItems": "center",
                    "&:hover": {
                        "color": "#99CCF3"
                    },
                    "&.MuiTypography-body1 > svg": {
                        "marginTop": 2
                    },
                    "& svg:last-child": {
                        "marginLeft": 2
                    }
                }
            }
        },
        "MuiChip": {
            "styleOverrides": {
                "root": {
                    "fontWeight": 500
                },
                "outlined": {
                    "color": "#fff",
                    "backgroundColor": "transparent",
                    "borderColor": "#173A5E"
                },
                "filled": {
                    "border": "1px solid transparent",
                    "color": "#fff",
                    "backgroundColor": "#1E4976",
                    "&:hover": {
                        "backgroundColor": "#173A5E"
                    }
                },
                "deleteIcon": {
                    "color": "#fff",
                    "&:hover": {
                        "color": "#E7EBF0"
                    }
                }
            }
        },
        "MuiList": {
            "styleOverrides": {
                "root": {
                    "padding": 0
                }
            }
        },
        "MuiListItemButton": {
            "styleOverrides": {
                "root": {
                    "padding": "8px",
                    "textTransform": "none",
                    "fontWeight": 500,
                    "fontSize": "0.875rem",
                    "color": "#CDD2D7",
                    "borderRadius": 0,
                    "&:hover": {
                        "backgroundColor": "rgba(19, 47, 76, 0.4)"
                    },
                    "&.Mui-selected": {
                        "color": "#fff",
                        "borderRadius": 10,
                        "border": "1px solid",
                        "borderColor": "#0059B2 !important",
                        "backgroundColor": "#132F4C",
                        "&:hover": {
                            "backgroundColor": "#173A5E"
                        }
                    }
                }
            }
        },
        "MuiSelect": {
            "defaultProps": {
                "IconComponent": {
                    "type": {},
                    "compare": null
                }
            },
            "styleOverrides": {
                "iconFilled": {
                    "top": "calc(50% - .25em)"
                }
            }
        },
        "MuiTab": {
            "defaultProps": {
                "disableTouchRipple": true
            }
        },
        "MuiPaper": {
            "styleOverrides": {
                "root": {
                    "backgroundImage": "none",
                    "backgroundColor": "#0A1929",
                    "&[href]": {
                        "textDecorationLine": "none"
                    }
                },
                "outlined": {
                    "display": "block",
                    "borderColor": "#1E4976",
                    "backgroundColor": "#132F4C",
                    "a&, button&": {
                        "&:hover": {
                            "boxShadow": "0px 4px 20px rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            }
        },
        "MuiTableCell": {
            "styleOverrides": {
                "root": {
                    "padding": "8px 16px",
                    "borderColor": "rgba(194, 224, 255, 0.08)"
                },
                "head": {
                    "color": "#fff",
                    "fontWeight": 700
                },
                "body": {
                    "color": "#B2BAC2"
                }
            }
        },
        "MuiToggleButtonGroup": {
            "styleOverrides": {
                "root": {
                    "backgroundColor": "#0A1929"
                }
            }
        },
        "MuiToggleButton": {
            "styleOverrides": {
                "root": {
                    "textTransform": "none",
                    "fontWeight": 500,
                    "color": "#CDD2D7",
                    "borderColor": "#1E4976",
                    "&.Mui-selected": {
                        "color": "#fff",
                        "borderColor": "#0059B2 !important",
                        "backgroundColor": "#132F4C",
                        "&:hover": {
                            "backgroundColor": "#173A5E"
                        }
                    }
                }
            }
        },
        "MuiTooltip": {
            "styleOverrides": {
                "tooltip": {
                    "padding": "5px 9px"
                }
            }
        },
        "MuiSwitch": {
            "styleOverrides": {
                "root": {
                    "width": 32,
                    "height": 20,
                    "padding": 0,
                    "& .MuiSwitch-switchBase": {
                        "&.Mui-checked": {
                            "transform": "translateX(11px)",
                            "color": "#fff"
                        }
                    }
                },
                "switchBase": {
                    "height": 20,
                    "width": 20,
                    "padding": 0,
                    "color": "#fff",
                    "&.Mui-checked + .MuiSwitch-track": {
                        "opacity": 1
                    }
                },
                "track": {
                    "opacity": 1,
                    "borderRadius": 32,
                    "backgroundColor": "#2D3843"
                },
                "thumb": {
                    "flexShrink": 0,
                    "width": "14px",
                    "height": "14px"
                }
            }
        },
        "MuiPaginationItem": {
            "styleOverrides": {
                "root": {
                    "textTransform": "none",
                    "fontWeight": 700,
                    "color": "#CDD2D7",
                    "borderColor": "#1E4976",
                    "&.Mui-selected": {
                        "color": "#fff",
                        "borderColor": "#0059B2 !important",
                        "backgroundColor": "#132F4C",
                        "&:hover": {
                            "backgroundColor": "#173A5E"
                        }
                    }
                }
            }
        }
    },
 */
