import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '344px',
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: '600px',
    },
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
    margin: '22px 0 8px',
  },
  description: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#9194A5',
    margin: 0,
  },
}));
