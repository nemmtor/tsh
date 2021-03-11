import React from 'react';

import { render } from 'tests';

import { Logo } from './Logo';

describe('Logo', () => {
  test('Displays correct text', async () => {
    const { getByText } = render(<Logo />);

    expect(getByText('join.tsh.io')).toBeInTheDocument();
  });
});
