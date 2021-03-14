import React, { ReactNode } from 'react';
import {
  createMuiTheme,
  ThemeProvider as MUIThemeProvider,
} from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(', '),
  },
  palette: {
    background: {
      default: '#f8f8fa',
    },
    primary: {
      main: '#4460F7',
      dark: '#2140E8',
    },
    secondary: {
      main: '#F9A52B',
    },
    text: {
      primary: '#1A1B1D',
    },
  },
});

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => (
  <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
);
