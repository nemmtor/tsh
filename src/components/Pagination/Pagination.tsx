import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

import { getPages } from './getPages';

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  pagination: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  paginationItem: {
    marginRight: theme.spacing(2),
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    '&:not(button)': {
      cursor: 'default',
    },
    '&:disabled': {
      color: '#9194A5',
      cursor: 'default',
    },
  },
  paginationItemActive: {
    color: theme.palette.primary.main,
  },
}));

const pagesOnEachSide = 3;

export const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: Props) => {
  const { pages, displayDivider } = getPages(
    currentPage,
    totalPages,
    pagesOnEachSide,
  );
  const styles = useStyles();

  return (
    <ul className={styles.pagination}>
      <li>
        <button
          className={`${styles.paginationItem}`}
          type="button"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
      </li>
      {pages.map((page, i) => {
        if (displayDivider && i === 3)
          return (
            <React.Fragment key={page}>
              <li className={styles.paginationItem}>...</li>
              <li>
                <button
                  className={`${styles.paginationItem} ${
                    currentPage === page ? styles.paginationItemActive : ''
                  }`}
                  type="button"
                  onClick={() => {
                    if (typeof page === 'number') {
                      setCurrentPage(page);
                    }
                  }}
                >
                  {page}
                </button>
              </li>
            </React.Fragment>
          );

        return (
          <li key={page}>
            <button
              className={`${styles.paginationItem} ${
                currentPage === page ? styles.paginationItemActive : ''
              }`}
              type="button"
              onClick={() => {
                if (typeof page === 'number') {
                  setCurrentPage(page);
                }
              }}
            >
              {page}
            </button>
          </li>
        );
      })}
      <li>
        <button
          className={`${styles.paginationItem}`}
          type="button"
          onClick={() => {
            setCurrentPage(totalPages);
          }}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </li>
    </ul>
  );
};
