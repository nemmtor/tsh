import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { NavBar } from 'components/NavBar';
import { ItemCard } from 'components/ItemCard';
import { Container } from '@material-ui/core';

export const Products = () => {
  return (
    <>
      <NavBar />
      <Container>
        <ItemCard />
        <h2>Products page</h2>
        <Link to={AppRoute.login}> Login </Link>
      </Container>
    </>
  );
};
