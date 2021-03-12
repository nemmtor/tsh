import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  menu: {
    position: 'absolute',
    minWidth: '184px',
    display: 'flex',
    flexDirection: 'column',
    top: 'calc(100% + 10px)',
    right: 0,
  },
});

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
