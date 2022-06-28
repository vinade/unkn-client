/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import themeLight from './light';
import themeDark from './dark';

enum ThemeNames {
    light = 'light',
    dark = 'dark'
}

const availableThemes = {
  light: themeLight,
  dark: themeDark,
};

export {
  ThemeNames,
  availableThemes,
};
