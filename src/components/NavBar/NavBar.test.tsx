import React from 'react';

import { fireEvent, render } from 'tests';

import { NavBar } from './NavBar';

jest.mock('lodash', () => {
  return {
    debounce: jest.fn((fn) => fn),
  };
});

const searchActionMock = jest.fn();
const setPromoMock = jest.fn();
const setActiveMock = jest.fn();

beforeEach(() => {
  searchActionMock.mockClear();
  setPromoMock.mockClear();
  setActiveMock.mockClear();
});

describe('NavBar', () => {
  test('Displays logo', async () => {
    const { getByTestId } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    expect(getByTestId('logo')).toBeInTheDocument();
  });

  test('Displays search', async () => {
    const { getByPlaceholderText } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('Displays active checkbox', async () => {
    const { getByText } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    expect(getByText('Active')).toBeInTheDocument();
  });

  test('Displays promo checkbox', async () => {
    const { getByText } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    expect(getByText('Promo')).toBeInTheDocument();
  });

  test('Displays user avatar', async () => {
    const { getByTestId } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    expect(getByTestId('avatar')).toBeInTheDocument();
  });

  test('Doesnt show user menu', async () => {
    const { queryByText } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    expect(queryByText('Logout')).not.toBeInTheDocument();
  });

  test('Show user menu after clicking on avatar', async () => {
    const { queryByText, getByTestId } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    fireEvent.click(getByTestId('avatar'));

    expect(queryByText('Logout')).toBeInTheDocument();
  });

  test('Hides user menu after clicking outside', async () => {
    const { queryByText, getByTestId } = render(
      <NavBar
        searchAction={searchActionMock}
        setPromo={setPromoMock}
        setActive={setActiveMock}
      />,
    );

    // open menu
    fireEvent.click(getByTestId('avatar'));

    // click outside
    fireEvent.click(getByTestId('logo'));

    expect(queryByText('Logout')).not.toBeInTheDocument();
  });
});
