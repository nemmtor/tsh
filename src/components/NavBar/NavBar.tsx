import {
  AppBar,
  Avatar,
  makeStyles,
  Theme,
  Container,
} from '@material-ui/core';
import React from 'react';

import avatar from 'img/avatar.png';

import { Logo } from '../Logo';
import { Search } from '../Search';
import { CustomCheckbox } from '../CustomCheckbox';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#FFF',
  },
  navBar: {
    backgroundColor: '#FFF',
    color: theme.palette.text.primary,
    padding: '52px 0 32px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'unset',
      padding: '0 0 48px 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '48px',
    },
  },
  inputsWrapper: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  logoWrapper: {
    order: -1,
    [theme.breakpoints.up('sm')]: {
      order: 'unset',
      marginRight: '50px',
    },
  },
  searchWrapper: {
    width: '100%',
    margin: '24px 0',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '300px',
      marginTop: '48px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '392px',
      margin: '0 24px 0 0',
    },
  },
  avatarWrapper: {
    order: -1,
    [theme.breakpoints.up('sm')]: {
      order: 'unset',
    },
  },
  avatar: {
    height: '48px',
    width: '48px',
  },
}));

export const NavBar = () => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <Container>
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
      </Container>
    </div>
  );
};
