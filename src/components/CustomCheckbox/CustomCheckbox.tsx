import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import { CustomCheckboxIcon } from './CustomCheckboxIcon';

interface Props {
  name: string;
  label: string;
  changeAction: (value: boolean) => void;
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  'data-testid': string;
}

export const CustomCheckbox = ({ name, label, changeAction }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change');
    changeAction(e.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
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
