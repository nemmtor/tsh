import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { NavBar } from 'components/NavBar/NavBar';

export const Products = () => {
  return (
    <>
      <NavBar />
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
    </>
  );
};
