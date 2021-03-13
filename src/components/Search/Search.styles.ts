import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',
    border: '1px solid #E0E2EA',
    backgroundColor: '#FFF',
    width: '100%',
    padding: theme.spacing(2),
  },
  searchIcon: {
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: '0',
    '&::placeholder': {
      color: theme.palette.text.primary,
      opacity: 1,
    },
  },
}));
