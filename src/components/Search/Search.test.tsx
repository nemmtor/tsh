import React from 'react';

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
});
