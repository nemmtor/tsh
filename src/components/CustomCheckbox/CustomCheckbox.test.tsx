import React from 'react';

import { fireEvent, render } from 'tests';
import { CustomCheckbox } from './CustomCheckbox';

describe('CustomCheckbox', () => {
  test('Displays label', async () => {
    const { getByText } = render(<CustomCheckbox name="test" label="test" />);
    expect(getByText('test')).toBeInTheDocument();
  });

  test('Checks checkbox on click', async () => {
    const { getByText, getByTestId } = render(
      <CustomCheckbox name="test" label="test" />,
    );

    const checkbox = getByTestId('checkbox') as HTMLInputElement;

    fireEvent.click(getByText('test'));
    expect(checkbox.checked).toBe(true);
  });
});
