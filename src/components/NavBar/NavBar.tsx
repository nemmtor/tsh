import React, { useRef, useState } from 'react';
import { AppBar, Avatar, Container } from '@material-ui/core';

import { useOutsideClick } from 'hooks';

import { Logo } from '../Logo';
import { Search } from '../Search';
import { CustomCheckbox } from '../CustomCheckbox';
import { Dropdown } from '../Dropdown';
import { DropdownItem } from '../DropdownItem';

import { useStyles } from './NavBar.styles';
import { Props } from './NavBar.types';
import { useHistory } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { useQueryClient } from 'react-query';

export const NavBar = ({
  user,
  userIsLoading,
  searchAction,
  setPromo,
  setActive,
}: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const history = useHistory();

  const userRef = useRef(null);

  const styles = useStyles();

  const queryClient = useQueryClient();

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const handleLoginRedirect = () => {
    history.push(AppRoute.login);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    queryClient.invalidateQueries('me');
  };

  useOutsideClick(userRef, () => {
    setMenuIsOpen(false);
  });

  return (
    <div className={styles.wrapper}>
      <Container>
        <AppBar elevation={0} className={styles.navBar} position="static">
          <div className={styles.logoWrapper}>
            <Logo />
          </div>
          <div className={styles.inputsWrapper}>
            <div className={styles.searchWrapper}>
              <Search searchAction={searchAction} />
            </div>
            <CustomCheckbox
              changeAction={setActive}
              name="active"
              label="Active"
            />
            <CustomCheckbox
              changeAction={setPromo}
              name="promo"
              label="Promo"
            />
          </div>
          {!userIsLoading && user && (
            <div ref={userRef} className={styles.userWrapper}>
              <button
                type="button"
                className={styles.avatarButton}
                onClick={toggleMenu}
              >
                <Avatar
                  data-testid="avatar"
                  src={user.avatar}
                  alt="User avatar"
                />
              </button>
              <Dropdown isOpen={menuIsOpen}>
                <DropdownItem handleClick={handleLogout}>Logout</DropdownItem>
              </Dropdown>
            </div>
          )}
          {!userIsLoading && !user && (
            <button
              type="button"
              onClick={handleLoginRedirect}
              className={styles.loginButton}
            >
              Log in
            </button>
          )}
        </AppBar>
      </Container>
    </div>
  );
};
