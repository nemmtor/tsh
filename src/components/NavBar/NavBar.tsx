import { AppBar, Avatar, Container } from '@material-ui/core';
import React from 'react';

import avatar from 'img/avatar.png';

import { useStyles } from './NavBar.styles';
import { Logo } from '../Logo';
import { Search } from '../Search';
import { CustomCheckbox } from '../CustomCheckbox';

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
