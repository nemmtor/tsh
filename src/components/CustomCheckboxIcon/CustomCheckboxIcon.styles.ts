import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  checkboxBase: {
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unchecked: {
    border: '1px solid #E0E2EA',
  },
  checked: {
    background: theme.palette.primary.main,
  },
}));
