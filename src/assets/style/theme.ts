export type Theme = {
  colors: {
    /**Hola */
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
  }
}

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
    }
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
    }
};
