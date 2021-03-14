import React from 'react';
import { render } from 'tests';

import { ItemCard } from './ItemCard';

describe('ItemCard', () => {
  const itemMock = {
    id: 1,
    name: 'Nike Running Shoes',
    description:
      'Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt',
    rating: 3,
    image: 'https://picsum.photos/640/480?random=3124',
    promo: true,
    active: true,
    handleClick: jest.fn(),
  };

  test('Displays card properly', () => {
    const { getByTestId, getByText, getAllByAltText } = render(
      <ItemCard {...itemMock} />,
    );

    expect(getByTestId('image')).toBeInTheDocument();

    expect(getByText(itemMock.name)).toBeInTheDocument();

    expect(getByText(itemMock.description)).toBeInTheDocument();

    expect(getAllByAltText('Filled star')).toHaveLength(itemMock.rating);

    expect(getAllByAltText('Unfilled star')).toHaveLength(5 - itemMock.rating);

    expect(getByText('Promo')).toBeInTheDocument();

    expect(getByTestId('button')).toBeInTheDocument();

    expect(getByText('Show details')).not.toBeDisabled();
  });

  test('Shows unavailable button when item is not active', () => {
    const { getByText, getByTestId } = render(
      <ItemCard {...itemMock} active={false} />,
    );
    expect(getByText('Unavailable')).toBeInTheDocument();

    expect(getByTestId('button')).toBeDisabled();
  });
});
