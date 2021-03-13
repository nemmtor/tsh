import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(', '),
  },
  palette: {
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
