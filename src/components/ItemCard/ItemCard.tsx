import { Button, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import { getRatingStars } from 'helpers';
import starFilled from 'img/star-filled.svg';
import starUnfilled from 'img/star-outline.svg';

interface Item {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
}

const mockItem: Item = {
  id: 1,
  name: 'Nike Running Shoes',
  description:
    'Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt',
  rating: 5,
  image: 'https://picsum.photos/200/300',
  promo: true,
  active: true,
};

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '327px',
    height: '400px',
  },
  promo: {
    position: 'absolute',
    top: '16px',
    background: theme.palette.secondary.main,
    padding: '4px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 600,
    color: '#FFF',
  },
  image: {
    borderRadius: '8px 8px 0 0',
  },
  imageDisabled: {
    filter: 'grayscale(100%)',
    opacity: 0.5,
  },
  title: {
    margin: '16px 0 8px 0',
    color: theme.palette.text.primary,
    fontSize: '18px',
    fontWeight: 600,
  },
  description: {
    margin: '0 0 34px 0',
    lineHeight: '16px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#9194A5',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    paddingInlineStart: 0,
    margin: '0 0 18px 0',
  },
  star: {
    '&:not(:last-of-type)': {
      marginRight: '10px',
    },
  },
  starImage: {
    height: '13px',
    width: '13px',
  },
  button: {
    padding: '11px 16px',
    '&.Mui-disabled': {
      backgroundColor: '#9194A5',
      color: '#FFF',
    },
  },
  buttonLabel: {
    fontSize: '14px',
    fontWeight: 600,
  },
}));

export const ItemCard = () => {
  const styles = useStyles();

  const stars = getRatingStars(mockItem.rating);

  return (
    <div className={styles.card}>
      {mockItem.promo && <div className={styles.promo}>Promo</div>}
      <img
        className={`${styles.image} ${
          mockItem.active ? '' : styles.imageDisabled
        }`}
        height="170"
        src={mockItem.image}
        alt={mockItem.name}
      />
      <h2 className={styles.title}>{mockItem.name}</h2>
      <p className={styles.description}>{mockItem.description}</p>
      <ul className={styles.stars}>
        {stars.map(({ id, isFilled }) => (
          <li className={styles.star} key={id}>
            <img
              className={styles.starImage}
              src={isFilled ? starFilled : starUnfilled}
              alt=""
            />
          </li>
        ))}
      </ul>
      <Button
        classes={{
          root: styles.button,
          label: styles.buttonLabel,
        }}
        variant="contained"
        color="primary"
        disabled={!mockItem.active}
      >
        {mockItem.active ? 'Show details' : 'Unavailable'}
      </Button>
    </div>
  );
};
