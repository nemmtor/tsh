import React from 'react';
import { makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: '24px',
  },
}));

export const Logo = () => {
  const styles = useStyles();
  return (
    <Typography data-testid="logo" className={styles.logo}>
      join.tsh.io
    </Typography>
  );
};
