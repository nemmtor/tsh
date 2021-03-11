import {
  AppBar,
  Avatar,
  makeStyles,
  Theme,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import React from 'react';

import avatar from 'img/avatar.png';

import { Logo } from '../Logo';
import { Search } from '../Search';
import { CustomCheckbox } from '../CustomCheckbox';

const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    backgroundColor: '#FFF',
    color: theme.palette.text.primary,
    padding: '52px 24px 32px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  inputsWrapper: {
    width: '100%',
  },
  logoWrapper: {
    order: -1,
  },
  searchWrapper: {
    width: '100%',
    maxWidth: '392px',
    margin: '24px 0',
  },
  avatarWrapper: {
    order: -1,
  },
  avatar: {
    height: '48px',
    width: '48px',
  },
}));

export const NavBar = () => {
  const styles = useStyles();
  return (
    <AppBar elevation={0} className={styles.navBar} position="static">
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.inputsWrapper}>
        <div className={styles.searchWrapper}>
          <Search />
        </div>
        <CustomCheckbox name="active" label="Active" />
        <CustomCheckbox name="promo" label="Promo" />
      </div>
      <div className={styles.avatarWrapper}>
        <Avatar data-testid="avatar" src={avatar} alt="user avatar" />
      </div>
    </AppBar>
  );
};
