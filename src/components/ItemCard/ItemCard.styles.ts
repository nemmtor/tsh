import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '327px',
    height: '400px',
    maxWidth: '100%',
    marginTop: theme.spacing(3),
    '&:last-of-type': {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      width: '288px',
    },
    [theme.breakpoints.up('lg')]: {
      '&:nth-child(4n)': {
        marginRight: 0,
      },
    },
  },
  promo: {
    position: 'absolute',
    top: '16px',
    background: theme.palette.secondary.main,
    padding: '4px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 600,
    color: '#FFF',
    zIndex: 100,
  },
  image: {
    borderRadius: '8px 8px 0 0',
  },
  imageDisabled: {
    filter: 'grayscale(100%)',
    opacity: 0.5,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    background: '#FFF',
    padding: '16px 16px 24px 16px',
    borderRadius: '0 0 8px 8px',
    height: '230px',
  },
  title: {
    margin: '0 0 8px 0',
    color: theme.palette.text.primary,
    fontSize: '18px',
    fontWeight: 600,
  },
  description: {
    margin: '0 0 34px 0',
    lineHeight: '16px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#9194A5',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    paddingInlineStart: 0,
    margin: '0 0 18px 0',
  },
  star: {
    '&:not(:last-of-type)': {
      marginRight: '10px',
    },
  },
  starImage: {
    height: '13px',
    width: '13px',
  },
  button: {
    padding: '11px 16px',
    marginTop: 'auto',
    textTransform: 'none',
    '&.Mui-disabled': {
      backgroundColor: '#9194A5',
      color: '#FFF',
    },
  },
  buttonLabel: {
    fontSize: '14px',
    fontWeight: 600,
  },
}));
