import React, { ReactNode } from 'react';

import { useStyles } from './DropdownItem.styles';

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
