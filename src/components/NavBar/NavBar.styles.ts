import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#FFF',
  },
  navBar: {
    backgroundColor: '#FFF',
    color: theme.palette.text.primary,
    padding: '52px 0 32px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'unset',
      padding: '0 0 48px 0',
    },
    [theme.breakpoints.up('md')]: {
      padding: '52px 0',
    },
  },
  inputsWrapper: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  logoWrapper: {
    order: -1,
    [theme.breakpoints.up('sm')]: {
      order: 'unset',
      marginRight: '50px',
    },
  },
  searchWrapper: {
    width: '100%',
    margin: '24px 0',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '300px',
      marginTop: '48px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '392px',
      margin: '0 24px 0 0',
    },
  },
  userWrapper: {
    order: -1,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      order: 'unset',
    },
  },
  avatar: {
    height: '48px',
    width: '48px',
  },
  avatarButton: {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    outline: 'none',
  },
  loginButton: {
    minWidth: '88px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    background: '#FFF',
    fontSize: '14px',
    fontWeight: 600,
    padding: '11px',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: theme.palette.primary.main,
      zIndex: -1,
      transformOrigin: 'right',
      transform: 'scaleX(0)',
      transition: 'transform 0.1s ease-out',
    },
    '&:hover': {
      color: '#FFF',
      '&::before': {
        transform: 'scaleX(1)',
      },
    },
  },
}));
