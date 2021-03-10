import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { AppProvidersProps } from './AppProviders.types';
import { theme } from './theme';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>{children}</Router>
  </ThemeProvider>
);
