import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import { CustomCheckboxIcon } from '../CustomCheckboxIcon/CustomCheckboxIcon';
import { CheckboxProps, Props } from './CustomCheckbox.types';

export const CustomCheckbox = ({ name, label, changeAction }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeAction(e.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          // TODO: move it to styles file
          style={{ padding: '0px 8px 0px 10px' }}
          name={name}
          onChange={handleChange}
          checkedIcon={<CustomCheckboxIcon isChecked />}
          icon={<CustomCheckboxIcon isChecked={false} />}
          inputProps={
            {
              'data-testid': 'checkbox',
            } as CheckboxProps
          }
        />
      }
      label={label}
    />
  );
};
