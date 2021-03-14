import React from 'react';

import { useStyles } from './DropdownItem.styles';
import { Props } from './DropdownItem.types';

export const DropdownItem = ({ handleClick, children }: Props) => {
  const styles = useStyles();
  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};
