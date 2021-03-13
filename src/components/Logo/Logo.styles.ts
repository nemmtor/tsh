import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: '24px',
    margin: 0,
  },
}));
