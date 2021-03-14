import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppProvidersProps } from './AppProviders.types';
import { ThemeProvider } from './ThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './UserProvider';

const queryClient = new QueryClient();

export const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <UserProvider>
      <ThemeProvider>
        <CssBaseline />
        <Router>{children}</Router>
      </ThemeProvider>
    </UserProvider>
  </QueryClientProvider>
);
