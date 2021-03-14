import React from 'react';

import { render } from 'tests';

import { NoItemsFound } from './NoItemsFound';

describe('NoItemsFound', () => {
  test('Displays empty document image', () => {
    const { getByAltText } = render(<NoItemsFound />);
    expect(getByAltText('Empty document')).toBeInTheDocument();
  });
});
