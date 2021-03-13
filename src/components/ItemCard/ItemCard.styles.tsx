import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '327px',
    height: '400px',
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
  },
  image: {
    borderRadius: '8px 8px 0 0',
  },
  imageDisabled: {
    filter: 'grayscale(100%)',
    opacity: 0.5,
  },
  title: {
    margin: '16px 0 8px 0',
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
