import React from 'react';

import { render } from 'tests';

import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  test('Doesnt display children if not open', () => {
    const { queryByText } = render(
      <Dropdown isOpen={false}>
        <span>test</span>
      </Dropdown>,
    );

    expect(queryByText('test')).not.toBeInTheDocument();
  });

  test('Displays children if open', () => {
    const { queryByText } = render(
      <Dropdown isOpen={true}>
        <span>test</span>
      </Dropdown>,
    );

    expect(queryByText('test')).toBeInTheDocument();
  });
});
