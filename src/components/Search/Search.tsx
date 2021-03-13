import React, { useCallback } from 'react';
import { InputBase } from '@material-ui/core';
import { debounce } from 'lodash';

import SearchIcon from 'img/search.svg';

import { useStyles } from './Search.styles';

interface Props {
  searchAction: (value: string) => void;
}

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
