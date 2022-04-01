import { DefaultTheme } from 'styled-components';

export type Theme = DefaultTheme;

/** Base, minimun spacing, in pixels */
const baseSpacing = 8;

// xs = 0, sm, md, lg, xl
export const breakpoints = ['600px', '900px', '1200px', '1536px'];
const base = {
  baseFontSize: 16,

  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    message: 1600,
    contextMenu: 1700,
  },

  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    },

    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    },
  },

  breakpoints: {
    unit: 'px',
    keys: ["xs" as const, "sm" as const, "md" as const, "lg" as const, "xl" as const],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
  },

  shadows: [
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

  borderRadius: 10,

  spacing: (multiplier: number, withUnit = false) => {
    const calculatedSpacing = baseSpacing * multiplier;
    if (withUnit) return `${calculatedSpacing}px`;
    return calculatedSpacing;
  },
};

const basePalette = {
  grey: {
    900: "#2C2C2C",
    800: "#3F3F3E",
    700: "#535350",
    600: "#666661",
    500: "#7A7973",
    400: "#8D8D85",
    300: "#A1A097",
    200: "#B4B3A8",
    100: "#C8C7BA",
    50: "#DBDACC",
    main: "#8F8F8C",
  },

  common: {
    black: "#1D1D1D",
    white: "#ffffff",
  },

  error: {
    900: "#6F0009",
    800: "#7F0912",
    700: "#8E121C",
    600: "#9E1B25",
    500: "#AD242E",
    400: "#BD2E38",
    300: "#CC3741",
    200: "#DC404A",
    100: "#EB4954",
    50: "#FB525D",
    main: "#BD2E38",
    light: "#DC404A",
    dark: "#9E1B25",
    contrastText: "#fff",
  },

  success: {
    50: "#E9FBF0",
    100: "#C6F6D9",
    200: "#9AEFBC",
    300: "#6AE79C",
    400: "#3EE07F",
    500: "#21CC66",
    600: "#1DB45A",
    700: "#1AA251",
    800: "#178D46",
    900: "#0F5C2E",
    main: "#1DB45A",
    light: "#6AE79C",
    dark: "#1AA251",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },

  warning: {
    50: "#FFF9EB",
    100: "#FFF3C1",
    200: "#FFECA1",
    300: "#FFDC48",
    400: "#F4C000",
    500: "#DEA500",
    600: "#D18E00",
    700: "#AB6800",
    800: "#8C5800",
    900: "#5A3600",
    main: "#DEA500",
    light: "#FFDC48",
    dark: "#AB6800",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },

  info: {
    main: "#29b6f6",
    light: "#4fc3f7",
    dark: "#0288d1",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
};

export const dark: Theme = {
  ...base,

  mode: 'dark',

  palette: {
    ...basePalette,

    primary: {
      900: "#0A3B6F",
      800: "#19487C",
      700: "#275589",
      600: "#366296",
      500: "#446FA3",
      400: "#537DAF",
      300: "#618ABC",
      200: "#7097C9",
      100: "#7EA4D6",
      50: "#8DB1E3",
      main: "#4E7CB2",
      light: '#6E97CB',
      dark: '#1F548D',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    
    primaryDark: {
      900: '#191C24',
      800: '#232A30',
      700: '#2E373D',
      600: '#384549',
      500: '#435256',
      400: '#4D6062',
      300: '#586D6F',
      200: '#627B7B',
      100: '#6D8888',
      50: '#779694',
      main: '#404850',
    },

    secondary: {
      900: '#085759',
      800: '#18696B',
      700: '#287C7E',
      600: '#398E90',
      500: '#49A0A3',
      400: '#59B3B5',
      300: '#69C5C8',
      200: '#7AD7DA',
      100: '#8AEAED',
      50: '#9AFCFF',
      main: '#49A0A3',
      light: '#7AD7DA',
      dark: '#287C7E',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },

    background: {
      default: '#0F1013',
      paper: '#ECECEC',
    },

    divider: 'rgba(194, 224, 255, 0.1);',

    text: {
      primary: "#FFF",
      secondary: "#B2BAC2",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,

    action: {
      active: "#FFF",
      activatedOpacity: 0.24,

      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,

      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,

      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,

      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
    },
  },
  
  mediaQueries: {
    // extra small is 0
    small: `@media screen and (min-width: ${base.breakpoints.values.sm}px)`,
    medium: `@media screen and (min-width: ${base.breakpoints.values.md}px)`,
    large: `@media screen and (min-width: ${base.breakpoints.values.lg}px)`,
    xlarge: `@media screen and (min-width: ${base.breakpoints.values.xl}px)`,
  },
};

export const light: Theme = dark;
