import userEvent from '@testing-library/user-event';
import React from 'react';

import { render } from 'tests';

import { FullScreenItem } from './FullScreenItem';

describe('FullScreenItem', () => {
  const handleCloseMock = jest.fn();

  const itemPropsMock = {
    imgSrc: 'src',
    title: 'Ergonomic Shirt',
    description: 'Deleniti aliquid conseq.',
    handleClose: handleCloseMock,
  };

  beforeEach(() => {
    handleCloseMock.mockClear();
  });

  test('Displays item properly', () => {
    const { getByText, getByAltText } = render(
      <FullScreenItem {...itemPropsMock} />,
    );

    expect(getByAltText(itemPropsMock.title)).toBeInTheDocument;

    expect(getByText(itemPropsMock.title)).toBeInTheDocument;

    expect(getByText(itemPropsMock.description)).toBeInTheDocument;
  });

  test('Calls handleclose on X button click', () => {
    const { getByAltText } = render(<FullScreenItem {...itemPropsMock} />);

    userEvent.click(getByAltText('Close'));

    expect(handleCloseMock).toBeCalled();
  });

  test('Calls handleclose on outer click', () => {
    const { getByText } = render(
      <div>
        <p>Outer</p>
        <FullScreenItem {...itemPropsMock} />
      </div>,
    );

    userEvent.click(getByText('Outer'));

    expect(handleCloseMock).toBeCalled();
  });
});
