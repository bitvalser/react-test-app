export interface Theme {
  primary: string;
  secondary: string;
}

const lightTheme: Theme = {
  primary: '#fff',
  secondary: '#000',
};

const darkTheme: Theme = {
  primary: '#000',
  secondary: '#fff',
};

type ThemeVariants = 'light' | 'dark';

const themes: { [key in ThemeVariants]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
};

export function getTheme(themeIdentifier: ThemeVariants = 'light'): Theme {
  return themes[themeIdentifier] || themes['light'];
}
