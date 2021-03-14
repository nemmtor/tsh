import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10000,
    background: 'rgba(26, 27, 29, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'relative',
    minHeight: '570px',
    width: '100%',
    borderRadius: '8px',
    background: '#FFF',
    [theme.breakpoints.up('sm')]: {
      width: '600px',
      minHeight: '530px',
      margin: '0 auto',
    },
  },
  closeButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '32px',
    height: '32px',
    background: '#FFF',
    border: 'none',
    outline: 'none',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    borderRadius: '8px 8px 0 0',
  },
  content: {
    padding: theme.spacing(3),
    background: '#FFF',
    [theme.breakpoints.up('sm')]: {
      padding: '24px 32px 56px',
    },
  },
  title: {
    fontSize: '24px',
    fontWeight: 600,
    color: theme.palette.text.primary,
    margin: 0,
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '24px',
    color: '#9194A5',
  },
}));
