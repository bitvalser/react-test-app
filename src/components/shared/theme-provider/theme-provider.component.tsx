import { getTheme } from '@constants/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={getTheme('light')}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
