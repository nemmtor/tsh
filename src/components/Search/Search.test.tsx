import React from 'react';
import userEvent from '@testing-library/user-event';

import { fireEvent, render, waitFor } from 'tests';

import { Search } from './Search';

describe('Search', () => {
  test('Displays input', async () => {
    const { getByTestId } = render(<Search />);
    expect(getByTestId('searchInput')).toBeInTheDocument();
  });

  test('Displays icon', async () => {
    const { getByTestId } = render(<Search />);
    expect(getByTestId('searchIcon')).toBeInTheDocument();
  });

  test('Shows correct value after change event', async () => {
    const { getByTestId } = render(<Search />);

    const value = 'asdf!@#L!P_dsa';

    const searchInput = getByTestId('searchInput');

    fireEvent.change(searchInput, { target: { value } });
    expect(searchInput).toHaveValue(value);
  });

  test('Focuses input after clicking it', async () => {
    const { getByTestId } = render(<Search />);

    // Had to use userEvent since fireEvent doesnt trigger real UI focus
    userEvent.click(getByTestId('searchInput'));
    await waitFor(() => {
      expect(getByTestId('searchInput')).toHaveFocus();
    });
  });
});
