import React from 'react';

import { useStyles } from './Pagination.styles';
import { getPages } from '../../helpers';

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const pagesOnEachSide = 3;

export const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: Props) => {
  const styles = useStyles();

  const { pages, displayDivider } = getPages(
    currentPage,
    totalPages,
    pagesOnEachSide,
  );

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
        const paginationItemClass = `${styles.paginationItem} ${
          currentPage === page ? styles.paginationItemActive : ''
        }`;

        // Display element with "..." divider
        if (displayDivider && i === pagesOnEachSide)
          return (
            <React.Fragment key={page}>
              <li className={styles.paginationItem}>...</li>
              <li>
                <button
                  className={paginationItemClass}
                  type="button"
                  onClick={() => {
                    setCurrentPage(page);
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
              className={paginationItemClass}
              type="button"
              onClick={() => {
                setCurrentPage(page);
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
