import React from 'react';

import { useStyles } from './Logo.styles';

export const Logo = () => {
  const styles = useStyles();
  return (
    <h1 data-testid="logo" className={styles.logo}>
      join.tsh.io
    </h1>
  );
};
