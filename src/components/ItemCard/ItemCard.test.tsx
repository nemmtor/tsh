import React from 'react';
import { render } from 'tests';

import { ItemCard } from './ItemCard';

const itemMock = {
  id: 1,
  name: 'Nike Running Shoes',
  description:
    'Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt',
  rating: 3,
  image: 'https://picsum.photos/640/480?random=3124',
  promo: true,
  active: true,
};

describe('ItemCard', () => {
  test('Displays image', async () => {
    const { getByTestId } = render(<ItemCard {...itemMock} />);
    expect(getByTestId('image')).toBeInTheDocument();
  });

  test('Displays title', async () => {
    const { getByText } = render(<ItemCard {...itemMock} />);
    expect(getByText(itemMock.name)).toBeInTheDocument();
  });

  test('Displays description', async () => {
    const { getByText } = render(<ItemCard {...itemMock} />);
    expect(getByText(itemMock.description)).toBeInTheDocument();
  });

  test('Displays filled stars properly', async () => {
    const { getAllByAltText } = render(<ItemCard {...itemMock} />);
    expect(getAllByAltText('Filled star')).toHaveLength(itemMock.rating);
  });

  test('Displays unfilled stars properly', async () => {
    const { getAllByAltText } = render(<ItemCard {...itemMock} />);
    expect(getAllByAltText('Unfilled star')).toHaveLength(5 - itemMock.rating);
  });

  test('Displays 5/5 rating', async () => {
    const { queryAllByAltText } = render(<ItemCard {...itemMock} rating={5} />);
    expect(queryAllByAltText('Filled star')).toHaveLength(5);
    expect(queryAllByAltText('Unfilled star')).toHaveLength(0);
  });

  test('Displays 0/5 rating', async () => {
    const { queryAllByAltText } = render(<ItemCard {...itemMock} rating={0} />);
    expect(queryAllByAltText('Filled star')).toHaveLength(0);
    expect(queryAllByAltText('Unfilled star')).toHaveLength(5);
  });

  test('Displays promo badge', () => {
    const { getByText } = render(<ItemCard {...itemMock} />);
    expect(getByText('Promo')).toBeInTheDocument();
  });

  test('Doesnt display promo badge', () => {
    const { queryByText } = render(<ItemCard {...itemMock} promo={false} />);
    expect(queryByText('Promo')).not.toBeInTheDocument();
  });

  test('Shows call to action', () => {
    const { getByTestId } = render(<ItemCard {...itemMock} />);
    expect(getByTestId('button')).toBeInTheDocument();
  });

  test('Is not disabled', () => {
    const { getByText } = render(<ItemCard {...itemMock} />);
    expect(getByText('Show details')).not.toBeDisabled();
  });

  test('Shows unavailable button', () => {
    const { getByText } = render(<ItemCard {...itemMock} active={false} />);
    expect(getByText('Unavailable')).toBeInTheDocument();
  });

  test('Is disabled', () => {
    const { getByTestId } = render(<ItemCard {...itemMock} active={false} />);
    expect(getByTestId('button')).toBeDisabled();
  });
});
