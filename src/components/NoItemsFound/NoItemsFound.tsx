import React from 'react';

import emptyDocument from 'img/empty-document.svg';

import { useStyles } from './NoItemsFound.styles';

// TODO: Add tests
export const NoItemsFound = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <img src={emptyDocument} alt="Empty document" />
      <p className={styles.title}>Ooops... It's empty here</p>
      <p className={styles.description}>There are no products on the list</p>
    </div>
  );
};
