import React from 'react';
import { makeStyles } from '@material-ui/core';

import check from 'img/check.svg';

const useStyles = makeStyles((theme) => ({
  checkboxBase: {
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unchecked: {
    border: '1px solid #E0E2EA',
  },
  checked: {
    background: theme.palette.primary.main,
  },
}));

interface Props {
  isChecked: boolean;
}

export const CustomCheckboxIcon = ({ isChecked }: Props) => {
  const styles = useStyles();

  const checkedClass = isChecked ? styles.checked : styles.unchecked;

  return (
    <div
      data-testid="checkboxIcon"
      className={`${styles.checkboxBase} ${checkedClass}`}
    >
      <img src={check} alt="Check"></img>
    </div>
  );
};
