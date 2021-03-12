import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    border: 'none',
    outline: 'none',
    padding: '20px 16px',
    background: '#FFF',
    boxShadow: '0 8px 32px rgba(17, 18, 20, 0.15)',
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
});

interface Props {
  handleClick: () => void;
  children: ReactNode;
}

export const DropdownItem = ({ handleClick, children }: Props) => {
  const styles = useStyles();
  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};
