import { FormControlLabel, Checkbox } from '@material-ui/core';
import React from 'react';

import { CustomCheckboxIcon } from './CustomCheckboxIcon';

interface Props {
  name: string;
  label: string;
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  'data-testid': string;
}

export const CustomCheckbox = ({ name, label }: Props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          style={{ padding: '0px 8px 0px 10px' }}
          name={name}
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
