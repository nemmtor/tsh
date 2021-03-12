import React from 'react';
import { InputBase, makeStyles, Theme } from '@material-ui/core';

import SearchIcon from 'img/search.svg';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',
    border: '1px solid #E0E2EA',
    backgroundColor: '#FFF',
    width: '100%',
    padding: theme.spacing(2),
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
    '&::placeholder': {
      color: theme.palette.text.primary,
      opacity: 1,
    },
  },
}));

export const Search = () => {
  const styles = useStyles();

  return (
    <label htmlFor="search" className={styles.search}>
      <InputBase
        name="search"
        id="search"
        placeholder="Search"
        classes={{
          root: styles.root,
          input: styles.input,
        }}
        inputProps={{
          'data-testid': 'searchInput',
        }}
      />
      <div className={styles.searchIcon}>
        <img data-testid="searchIcon" src={SearchIcon} alt="Search" />
      </div>
    </label>
  );
};
