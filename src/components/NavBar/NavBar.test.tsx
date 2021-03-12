import React from 'react';

import { fireEvent, render } from 'tests';

import { NavBar } from './NavBar';

describe('NavBar', () => {
  test('Displays logo', async () => {
    const { getByTestId } = render(<NavBar />);

    expect(getByTestId('logo')).toBeInTheDocument();
  });

  test('Displays search', async () => {
    const { getByPlaceholderText } = render(<NavBar />);

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('Displays active checkbox', async () => {
    const { getByText } = render(<NavBar />);

    expect(getByText('Active')).toBeInTheDocument();
  });

  test('Displays promo checkbox', async () => {
    const { getByText } = render(<NavBar />);

    expect(getByText('Promo')).toBeInTheDocument();
  });

  test('Displays user avatar', async () => {
    const { getByTestId } = render(<NavBar />);

    expect(getByTestId('avatar')).toBeInTheDocument();
  });

  test('Doesnt show user menu', async () => {
    const { queryByText } = render(<NavBar />);

    expect(queryByText('Logout')).not.toBeInTheDocument();
  });

  test('Show user menu after clicking on avatar', async () => {
    const { queryByText, getByTestId } = render(<NavBar />);

    fireEvent.click(getByTestId('avatar'));

    expect(queryByText('Logout')).toBeInTheDocument();
  });

  test('Hides user menu after clicking outside', async () => {
    const { queryByText, getByTestId } = render(<NavBar />);

    // open menu
    fireEvent.click(getByTestId('avatar'));

    // click outside
    fireEvent.click(getByTestId('logo'));

    expect(queryByText('Logout')).not.toBeInTheDocument();
  });
});
