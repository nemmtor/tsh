import { Button } from '@material-ui/core';
import React from 'react';

import { getRatingStars } from 'helpers';
import starFilled from 'img/star-filled.svg';
import starUnfilled from 'img/star-outline.svg';

import { useStyles } from './ItemCard.styles';
import { ItemProps } from './ItemCard.types';

export const ItemCard = ({
  active,
  description,
  image,
  name,
  promo,
  rating,
  handleClick,
}: ItemProps) => {
  const styles = useStyles();

  const stars = getRatingStars(rating);

  return (
    <div className={styles.card}>
      {promo && <div className={styles.promo}>Promo</div>}
      <img
        data-testid="image"
        className={`${styles.image} ${active ? '' : styles.imageDisabled}`}
        height="170"
        src={image}
        alt={name}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <ul className={styles.stars}>
          {stars.map(({ id, isFilled }) => (
            <li className={styles.star} key={id}>
              <img
                className={styles.starImage}
                src={isFilled ? starFilled : starUnfilled}
                alt={isFilled ? `Filled star` : `Unfilled star`}
              />
            </li>
          ))}
        </ul>
        <Button
          data-testid="button"
          classes={{
            root: styles.button,
            label: styles.buttonLabel,
          }}
          variant="contained"
          color="primary"
          disabled={!active}
          onClick={handleClick}
        >
          {active ? 'Show details' : 'Unavailable'}
        </Button>
      </div>
    </div>
  );
};
