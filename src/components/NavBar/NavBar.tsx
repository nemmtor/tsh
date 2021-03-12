import React, { useState } from 'react';
import { AppBar, Avatar, Container } from '@material-ui/core';

import avatar from 'img/avatar.png';

import { Logo } from '../Logo';
import { Search } from '../Search';
import { CustomCheckbox } from '../CustomCheckbox';
import { Dropdown } from '../Dropdown';
import { DropdownItem } from '../DropdownItem';

import { useStyles } from './NavBar.styles';

export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const styles = useStyles();

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log('logout');
  };

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
            <button
              type="button"
              className={styles.avatarButton}
              onClick={toggleMenu}
            >
              <Avatar data-testid="avatar" src={avatar} alt="User avatar" />
            </button>
            <Dropdown isOpen={menuIsOpen}>
              <DropdownItem handleClick={handleLogout}>Logout</DropdownItem>
            </Dropdown>
          </div>
        </AppBar>
      </Container>
    </div>
  );
};
