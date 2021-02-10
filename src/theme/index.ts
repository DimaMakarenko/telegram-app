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
    primary: Colors.darkBlue,
    secondary: Colors.gray900,
    font: Colors.white,
    ...globalColors,
  },
};

export const themeWhite: ITheme = {
  title: 'white',
  colors: {
    primary: Colors.white,
    secondary: Colors.gray900,
    font: Colors.gray500,
    secondaryFont: Colors.gray900,
    secondaryBg: Colors.gray400,
    search: Colors.gray100,
    ...globalColors,
  },
};
export const allThemes: ITheme[] = [themeBlue];
