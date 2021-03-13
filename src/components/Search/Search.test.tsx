import React from 'react';
import userEvent from '@testing-library/user-event';

import { fireEvent, render, waitFor } from 'tests';

import { Search } from './Search';

jest.mock('lodash', () => {
  return {
    debounce: jest.fn((fn) => fn),
  };
});

const searchActionMock = jest.fn();

beforeEach(() => {
  searchActionMock.mockClear();
});

describe('Search', () => {
  test('Displays input', async () => {
    const { getByTestId } = render(<Search searchAction={searchActionMock} />);

    expect(getByTestId('searchInput')).toBeInTheDocument();
  });

  test('Displays icon', async () => {
    const { getByTestId } = render(<Search searchAction={searchActionMock} />);

    expect(getByTestId('searchIcon')).toBeInTheDocument();
  });

  test('Shows correct value after change event', async () => {
    const { getByTestId } = render(<Search searchAction={searchActionMock} />);

    const value = 'asdf!@#L!P_dsa';

    const searchInput = getByTestId('searchInput');

    fireEvent.change(searchInput, { target: { value } });

    expect(searchInput).toHaveValue(value);
  });

  test('Focuses input after clicking it', async () => {
    const { getByTestId } = render(<Search searchAction={searchActionMock} />);

    // Had to use userEvent since fireEvent doesnt trigger real UI focus
    userEvent.click(getByTestId('searchInput'));

    await waitFor(() => {
      expect(getByTestId('searchInput')).toHaveFocus();
    });
  });

  test('Focuses input after clicking icon', async () => {
    const { getByTestId } = render(<Search searchAction={searchActionMock} />);

    // Had to use userEvent since fireEvent doesnt trigger real UI focus
    userEvent.click(getByTestId('searchIcon'));

    await waitFor(() => {
      expect(getByTestId('searchInput')).toHaveFocus();
    });
  });

  // TODO: Add test which checks if searchAction is called on input
});
