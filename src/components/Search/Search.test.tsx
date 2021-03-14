import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, waitFor } from 'tests';

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

  test('Shows correct value typing', async () => {
    const { getByTestId } = render(<Search searchAction={searchActionMock} />);

    const value = 'asdf!@#L!P_dsa';

    const searchInput = getByTestId('searchInput');

    userEvent.type(searchInput, value);

    expect(searchInput).toHaveValue(value);
  });

  test('Focuses input after clicking it', async () => {
    const { getByTestId } = render(<Search searchAction={searchActionMock} />);

    userEvent.click(getByTestId('searchInput'));

    await waitFor(() => {
      expect(getByTestId('searchInput')).toHaveFocus();
    });
  });

  test('Focuses input after clicking icon', async () => {
    const { getByTestId } = render(<Search searchAction={searchActionMock} />);

    userEvent.click(getByTestId('searchIcon'));

    await waitFor(() => {
      expect(getByTestId('searchInput')).toHaveFocus();
    });
  });

  test('Calls searchAction on input', async () => {
    const { getByTestId } = render(<Search searchAction={searchActionMock} />);
    userEvent.type(getByTestId('searchInput'), 'abcd');
    expect(searchActionMock).toBeCalled();
  });
});
