import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: { flexWrap: 'wrap' },
  },
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
