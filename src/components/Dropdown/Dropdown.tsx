import React, { ReactNode } from 'react';

import { useStyles } from './Dropdown.styles';

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

// Parent element needs to have position: relative for positioning purposes
export const Dropdown = ({ children, isOpen }: Props) => {
  const styles = useStyles();
  if (!isOpen) return null;
  return <div className={styles.menu}>{children}</div>;
};
