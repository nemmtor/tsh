import React, { useCallback } from 'react';
import { InputBase } from '@material-ui/core';

import SearchIcon from 'img/search.svg';

import { debounce } from 'helpers';

import { useStyles } from './Search.styles';
import { Props } from './Search.types';

export const Search = ({ searchAction }: Props) => {
  const styles = useStyles();

  const searchActionDebounced = useCallback(debounce(searchAction, 500), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchActionDebounced(e.target.value);
  };

  return (
    <label htmlFor="search" className={styles.search}>
      <InputBase
        name="search"
        id="search"
        placeholder="Search"
        onChange={handleChange}
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
