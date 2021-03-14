import userEvent from '@testing-library/user-event';
import React from 'react';
import { UserData } from 'requests/user';

import { render } from 'tests';

import { NavBar } from './NavBar';

describe('NavBar', () => {
  jest.mock('lodash', () => {
    return {
      debounce: jest.fn((fn) => fn),
    };
  });

  const searchActionMock = jest.fn();
  const setPromoMock = jest.fn();
  const setActiveMock = jest.fn();

  const userMock: UserData = {
    username: 'Bob',
    avatar: 'bobsavatar.com',
    id: 1,
  };

  beforeEach(() => {
    searchActionMock.mockClear();
    setPromoMock.mockClear();
    setActiveMock.mockClear();
  });

  test('Displays navbar properly', () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    expect(getByTestId('logo')).toBeInTheDocument();

    expect(getByPlaceholderText('Search')).toBeInTheDocument();

    expect(getByText('Active')).toBeInTheDocument();

    expect(getByText('Promo')).toBeInTheDocument();

    expect(getByText('Log in')).toBeInTheDocument();
  });

  test('Displays user avatar', () => {
    const { getByTestId } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
        user={userMock}
      />,
    );

    expect(getByTestId('avatar')).toBeInTheDocument();
  });

  test('Doesnt show user menu at start', () => {
    const { queryByText } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    expect(queryByText('Logout')).not.toBeInTheDocument();
  });

  test('Show user menu after clicking on avatar', () => {
    const { queryByText, getByTestId } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
        user={userMock}
      />,
    );

    userEvent.click(getByTestId('avatar'));

    expect(queryByText('Logout')).toBeInTheDocument();
  });

  test('Hides user menu after clicking outside', () => {
    const { queryByText, getByTestId } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
        user={userMock}
      />,
    );

    // open menu
    userEvent.click(getByTestId('avatar'));

    // click outside
    userEvent.click(getByTestId('logo'));

    expect(queryByText('Logout')).not.toBeInTheDocument();
  });
});
