import { Colors } from './colors';

const filters = {
  blue: 'hue-rotate(95deg)',
  hover: 'hue-rotate(200deg) grayscale(100%)',
};

const globalColors = {
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
    primary: Colors.primaryBlue,
    secondary: Colors.secondaryBlue,
    font: Colors.white,
    ...globalColors,
  },
};

export const allThemes: ITheme[] = [themeBlue];
