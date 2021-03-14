import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppProvidersProps } from './AppProviders.types';
import { ThemeProvider } from './ThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <ThemeProvider>
      <CssBaseline />
      <Router>{children}</Router>
    </ThemeProvider>
  </QueryClientProvider>
);
