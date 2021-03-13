import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Container } from '@material-ui/core';

import { NavBar } from 'components/NavBar';

import { fetchProducts } from './fetchProducts';
import { ItemCard, ItemProps } from 'components/ItemCard/ItemCard';
import { Pagination } from 'components/Pagination';

interface Meta {
  itemCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}
interface Data {
  items: ItemProps[];
  meta: Meta;
  links: Links;
}

const limit = 8;

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const [search, setSearch] = useState<string | null>(null);
  const [promo, setPromo] = useState(false);
  const [active, setActive] = useState(false);

  const { data, isLoading, isError, error } = useQuery<Data, Error>(
    ['products', { page: currentPage, limit, search, promo, active }],
    fetchProducts,
    {
      keepPreviousData: true,
      // cache response for 5 minutes
      staleTime: 1 * 1000 * 60 * 5,
    },
  );

  useEffect(() => {
    if (data?.meta.totalPages) {
      setTotalPages(data.meta.totalPages);
    }
  }, [data]);

  return (
    <>
      <NavBar
        searchAction={setSearch}
        setPromo={setPromo}
        setActive={setActive}
      />
      <Container>
        {isLoading && <p>Loading...</p>}
        {!isLoading && isError && <p>{error?.message}</p>}
        {!isLoading && !isError && data && (
          <div>
            {data.items.map(
              ({ active, description, id, image, name, promo, rating }) => (
                <ItemCard
                  id={id}
                  key={id}
                  active={active}
                  description={description}
                  image={image}
                  name={name}
                  promo={promo}
                  rating={rating}
                />
              ),
            )}
            {totalPages && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        )}
      </Container>
    </>
  );
};
