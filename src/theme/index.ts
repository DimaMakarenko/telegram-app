const colors = {
  // blue
  blue: '#131a36',
  darkBlue: '#124124',

  // white
  white: '#fff',
  // effects
  hover: '#374048',
};

const filters = {
  blue: 'hue-rotate(95deg)',
  hover: 'hue-rotate(200deg) grayscale(100%)',
};

const globalColors = {
  hover: colors.hover,
  svgHover: filters.hover,
};

export interface ITheme {
  title: string;
  colors: {
    [index: string]: string;
  };
}

export const themeBlue: ITheme = {
  title: 'blue',
  colors: {
    primary: colors.blue,
    secondary: colors.darkBlue,
    font: colors.white,
    svgColor: filters.blue,
    ...globalColors,
  },
};

export const allThemes: ITheme[] = [themeBlue];
