import userEvent from '@testing-library/user-event';
import React from 'react';

import { render } from 'tests';

import { CustomCheckbox } from './CustomCheckbox';

describe('CustomCheckbox', () => {
  const changeActionMock = jest.fn();

  beforeEach(() => {
    changeActionMock.mockClear();
  });

  test('Displays label', () => {
    const { getByText } = render(
      <CustomCheckbox
        changeAction={changeActionMock}
        name="test"
        label="test"
      />,
    );

    expect(getByText('test')).toBeInTheDocument();
  });

  test('Checks checkbox on click', () => {
    const { getByText, getByTestId } = render(
      <CustomCheckbox
        changeAction={changeActionMock}
        name="test"
        label="test"
      />,
    );

    const checkbox = getByTestId('checkbox') as HTMLInputElement;

    userEvent.click(getByText('test'));

    expect(checkbox.checked).toBe(true);
  });

  test('Changes class of icon on click', () => {
    const { getByText, getByTestId } = render(
      <CustomCheckbox
        changeAction={changeActionMock}
        name="test"
        label="test"
      />,
    );

    const checkbox = getByTestId('checkboxIcon');

    userEvent.click(getByText('test'));

    expect(checkbox.classList.value).toContain('checked');
  });

  test('Calls change action after click', () => {
    const { getByText, getByTestId } = render(
      <CustomCheckbox
        changeAction={changeActionMock}
        name="test"
        label="test"
      />,
    );

    userEvent.click(getByText('test'));

    expect(changeActionMock).toBeCalled();
  });
});
