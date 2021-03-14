import React from 'react';
import { render } from '@testing-library/react';

import { Pagination } from './Pagination';
import userEvent from '@testing-library/user-event';

const setCurrentPageMock = jest.fn();

const paginationPropsMock = {
  currentPage: 1,
  totalPages: 10,
  setCurrentPage: setCurrentPageMock,
};

beforeEach(() => {
  setCurrentPageMock.mockClear();
});

describe('Pagination', () => {
  test('Displays first link', async () => {
    const { getByText } = render(<Pagination {...paginationPropsMock} />);
    expect(getByText('First')).toBeInTheDocument();
  });

  test('Displays last link', async () => {
    const { getByText } = render(<Pagination {...paginationPropsMock} />);
    expect(getByText('Last')).toBeInTheDocument();
  });

  test('Has first link disabled while being on first page', async () => {
    const { getByText } = render(
      <Pagination {...paginationPropsMock} currentPage={1} />,
    );
    expect(getByText('First')).toBeDisabled();
  });

  test('Has last link disabled while being on last page', async () => {
    const { getByText } = render(
      <Pagination {...paginationPropsMock} currentPage={10} totalPages={10} />,
    );
    expect(getByText('Last')).toBeDisabled();
  });

  test('Displays divider when totalPages > 6 and current Page <= totalPages - 5', async () => {
    const { getByText } = render(
      <Pagination {...paginationPropsMock} currentPage={10} totalPages={20} />,
    );
    expect(getByText('...')).toBeInTheDocument();
  });

  test('Doesnt display divider when totalPages > 6 and current Page > totalPages - 5', async () => {
    const { queryByText } = render(
      <Pagination {...paginationPropsMock} currentPage={16} totalPages={20} />,
    );
    expect(queryByText('...')).not.toBeInTheDocument();
  });

  test('Doesnt display divider when totalPages <= 6', async () => {
    const { queryByText } = render(
      <Pagination {...paginationPropsMock} totalPages={6} />,
    );
    expect(queryByText('...')).not.toBeInTheDocument();
  });

  test('Calls set current page on click', async () => {
    const { getByText } = render(<Pagination {...paginationPropsMock} />);
    userEvent.click(getByText('3'));
    expect(setCurrentPageMock).toBeCalled();
  });

  test('Calls set current page with proper argument', async () => {
    const { getByText } = render(<Pagination {...paginationPropsMock} />);
    userEvent.click(getByText('3'));
    expect(setCurrentPageMock).toBeCalledWith(3);
  });
});
