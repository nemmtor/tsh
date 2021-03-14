import React from 'react';

import { useStyles } from './Dropdown.styles';
import { Props } from './Dropdown.types';

// Parent element needs to have position: relative for positioning purposes
export const Dropdown = ({ children, isOpen }: Props) => {
  const styles = useStyles();
  if (!isOpen) return null;
  return <div className={styles.menu}>{children}</div>;
};
