import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Container } from '@material-ui/core';

import { NavBar } from 'components/NavBar';
import { ItemCard } from 'components/ItemCard';
import { Pagination } from 'components/Pagination';
import { NoItemsFound } from 'components/NoItemsFound';

import { useStyles } from './Products.styles';
import { ResponseData } from './ResponseData';
import { fetchProducts } from './fetchProducts';

// Fetch 4 items for smaller devices and 8 for larger
const limit = window.screen.width >= 960 ? 8 : 4;
export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const [search, setSearch] = useState<string | null>(null);
  const [promo, setPromo] = useState(false);
  const [active, setActive] = useState(false);

  const styles = useStyles();

  const { data, isLoading, isError, error } = useQuery<ResponseData, Error>(
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
          <div className={styles.wrapper}>
            {data.items.length === 0 && <NoItemsFound />}
            {data.items.length > 0 && (
              <>
                <div className={styles.itemsWrapper}>
                  {data.items.map((item) => (
                    // TODO: Add full screen handler
                    <ItemCard
                      id={item.id}
                      key={item.id}
                      active={item.active}
                      description={item.description}
                      image={item.image}
                      name={item.name}
                      promo={item.promo}
                      rating={item.rating}
                    />
                  ))}
                </div>
                {totalPages && (
                  <div className={styles.paginationWrapper}>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      setCurrentPage={setCurrentPage}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </Container>
    </>
  );
};
