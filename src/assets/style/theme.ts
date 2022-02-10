export type Theme = {
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

  breakpoints: string[],
  displays: string[],
  space: number[],
  mediaQueries: {
    small: string,
    medium: string,
    large: string,
    xlarge: string,
    xxlarge: string,
  },
  formatDisplay: (num:number) => string | number,
}

export const zIndex = {
  loading: 100,
  modal: 1000,
};

// xs = 0, sm, md, lg, xl, xxl
export const breakpoints = ['576px', '767px', '992px', '1200px', '1400px'];
export const base = {
  // Font Sizes
  // example fontSizes aliases
  fontSizes: [12, 14, 16, 20, 24, 32],
  displays: ['1.75rem', '2.5rem', '3.24rem', '5rem', '8rem', '10rem'],
  formatDisplay(num: number): string | number {
    if (num < 3) {
      return this.fontSizes[num + 3];
    }

    if (num < 5) {
      return this.displays[num - 2];
    }

    return this.displays[4];
  },

  breakpoints,
  mediaQueries: {
    // extra small is 0
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
    xxlarge: `@media screen and (min-width: ${breakpoints[4]})`,
  },

  // In pixels
  space: [4, 8, 16, 24, 32],
};

export const dark: Theme = {
  colors: {
    primary: {
      normal: "#30323d",
      light: "#4d5061",
    },

    mid1: "#cdd1c4",

    secondary: {
      normal: "#267fde",
      light: "#81add5",
    },

    mid2: "#aec4d1",

    font: {
      normal: "#d0d5ce",
      light: "#dbdacc,",
    },
    
    success: '#198754',
    info: '#0dcaf0',
    warning: '#ffc107',
    danger: '#dc3545',

    background: 'rgba(0, 0, 0, 1)',
  },
  
  ...base,
};

export const light: Theme = {
  colors: {
    primary: {
      normal: "#dfe0e0",
      light: "#dfe0e0",
    },

    mid1: "#6d7e9c",

    secondary: {
      normal: "#007ea7",
      light: "#377ea2",
    },

    mid2: "#527e9f",

    font: {
      normal: "#2d3142",
      light: "#bfc0c0",
    },
      
    success: '#198754',
    info: '#0dcaf0',
    warning: '#ffc107',
    danger: '#dc3545',

    background: '#dfe0e0',
  },
  ...base,
};
