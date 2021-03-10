import { AppBar, Avatar, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import avatar from 'img/avatar.png';

import { Logo } from '../Logo';
import { Search } from '../Search';

const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    backgroundColor: '#FFF',
    padding: '52px 24px 32px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  logoWrapper: {
    order: -1,
  },
  searchWrapper: {
    width: '100%',
    maxWidth: '392px',
    marginTop: theme.spacing(3),
  },
  avatarWrapper: {
    order: -1,
  },
  avatar: {
    height: theme.typography.pxToRem(48),
    width: theme.typography.pxToRem(48),
  },
}));

export const NavBar = () => {
  const styles = useStyles();
  return (
    <AppBar elevation={0} className={styles.navBar} position="static">
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.avatarWrapper}>
        <Avatar data-testid="avatar" src={avatar} alt="user avatar" />
      </div>
    </AppBar>
  );
};
