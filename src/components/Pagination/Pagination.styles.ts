import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  pagination: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    paddingInlineStart: 0,
    margin: 0,
  },
  paginationItem: {
    marginRight: theme.spacing(2),
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: 0,
    '&:not(button)': {
      cursor: 'default',
    },
    '&:disabled': {
      color: '#9194A5',
      cursor: 'default',
    },
  },
  paginationItemActive: {
    color: theme.palette.primary.main,
  },
}));
