import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Container } from '@material-ui/core';

import { NavBar } from 'components/NavBar';
import { ItemCard, ItemProps } from 'components/ItemCard';
import { Pagination } from 'components/Pagination';
import { NoItemsFound } from 'components/NoItemsFound';
import { FullScreenItem, FullScreenItemProps } from 'components/FullScreenItem';

import { getMe, UserData } from 'requests/user';
import { getProducts, ProductsData, ProductsQueryKey } from 'requests/products';

import { useResizeListener } from 'hooks';
import { bodyScroll } from 'helpers';

import { useStyles } from './Products.styles';

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [fullScreenItem, setFullScreenItem] = useState<Omit<
    FullScreenItemProps,
    'handleClose'
  > | null>(null);

  const [search, setSearch] = useState<string | null>(null);
  const [promo, setPromo] = useState(false);
  const [active, setActive] = useState(false);
  const [limit, setLimit] = useState(8);

  const styles = useStyles();

  const { screenWidth } = useResizeListener();

  useEffect(() => {
    if (screenWidth >= 960) {
      setLimit(8);
    } else {
      setLimit(4);
    }
  }, [screenWidth]);

  const {
    data,
    isLoading: isLoadingProducts,
    isError: isProductsError,
    error: productsError,
  } = useQuery<ProductsData, Error, ProductsData, ProductsQueryKey>(
    ['products', { page: currentPage, limit, search, promo, active }],
    getProducts,
    {
      keepPreviousData: true,
      // cache response for 5 minutes
      staleTime: 1000 * 60 * 5,
    },
  );

  const {
    data: userData,
    isLoading: isLoadingUser,
  } = useQuery<UserData | null>('me', getMe, {
    // cache for 24h (token expiration time)
    staleTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    if (data?.meta.totalPages) {
      setTotalPages(data.meta.totalPages);
    }
  }, [data]);

  const handleSetFullScreen = (item: ItemProps) => {
    setFullScreenItem({
      description: item.description,
      imgSrc: item.image,
      title: item.name,
    });
    bodyScroll.disable();
  };

  const handleFullScreenClose = () => {
    setFullScreenItem(null);
    bodyScroll.enable();
  };

  const handleSearch = (value: string) => {
    setCurrentPage(1);
    setSearch(value);
  };

  const handlePromo = (checked: boolean) => {
    setCurrentPage(1);
    setPromo(checked);
  };

  const handleActive = (checked: boolean) => {
    setCurrentPage(1);
    setActive(checked);
  };

  return (
    <div className="page">
      <NavBar
        user={userData}
        userIsLoading={isLoadingUser}
        searchAction={handleSearch}
        setPromo={handlePromo}
        setActive={handleActive}
      />
      <Container>
        {isLoadingProducts && <p>Loading...</p>}
        {!isLoadingProducts && isProductsError && (
          <p>{productsError?.message}</p>
        )}
        {!isLoadingProducts && !isProductsError && data && (
          <div className={styles.wrapper}>
            {data.items.length === 0 && <NoItemsFound />}
            {data.items.length > 0 && (
              <>
                <div className={styles.itemsWrapper}>
                  {data.items.map((item) => (
                    <ItemCard
                      id={item.id}
                      key={item.id}
                      active={item.active}
                      description={item.description}
                      image={item.image}
                      name={item.name}
                      promo={item.promo}
                      rating={item.rating}
                      handleClick={() => {
                        handleSetFullScreen(item);
                      }}
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
      {fullScreenItem && (
        <FullScreenItem
          handleClose={handleFullScreenClose}
          description={fullScreenItem.description}
          title={fullScreenItem.title}
          imgSrc={fullScreenItem.imgSrc}
        />
      )}
    </div>
  );
};
