import React from 'react';

import check from 'img/check.svg';

import { useStyles } from './CustomCheckboxIcon.styles';

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
