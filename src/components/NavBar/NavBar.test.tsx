import React from 'react';

import { render } from 'tests';

import { NavBar } from './NavBar';

describe('NavBar', () => {
  test('Displays logo', async () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId('logo')).toBeInTheDocument();
  });

  test('Displays avatar', async () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId('avatar')).toBeInTheDocument();
  });
});
