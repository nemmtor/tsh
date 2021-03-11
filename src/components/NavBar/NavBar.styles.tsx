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
      paddingTop: '48px',
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
  avatarWrapper: {
    order: -1,
    [theme.breakpoints.up('sm')]: {
      order: 'unset',
    },
  },
  avatar: {
    height: '48px',
    width: '48px',
  },
}));
