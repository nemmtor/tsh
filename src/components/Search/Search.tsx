import React from 'react';
import { fade, InputBase, makeStyles, Theme } from '@material-ui/core';

import SearchIcon from 'img/search.svg';

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    border: '1px solid black',
    backgroundColor: '#FFF',
    width: '100%',
    padding: '16px',
  },
  searchIcon: {
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: '0',
  },
}));

export const Search = () => {
  const styles = useStyles();

  return (
    <label htmlFor="search" className={styles.search}>
      <InputBase
        data-testid="searchInput"
        name="search"
        placeholder="Search…"
        classes={{
          input: styles.input,
        }}
      />
      <div className={styles.searchIcon}>
        <img data-testid="searchIcon" src={SearchIcon} alt="Search" />
      </div>
    </label>
  );
};
