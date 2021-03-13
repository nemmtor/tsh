import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppProvidersProps } from './AppProviders.types';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <CssBaseline />
      <Router>{children}</Router>
    </QueryClientProvider>
  </ThemeProvider>
);
