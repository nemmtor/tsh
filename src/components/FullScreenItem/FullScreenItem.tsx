import React, { useRef } from 'react';
import { Container } from '@material-ui/core';

import closeIcon from 'img/close.svg';

import { useStyles } from './FullScreenItem.styles';
import { useOutsideClick } from 'hooks';

export interface FullScreenItemProps {
  imgSrc: string;
  title: string;
  description: string;
  handleClose: () => void;
}

export const FullScreenItem = ({
  imgSrc,
  title,
  description,
  handleClose,
}: FullScreenItemProps) => {
  const styles = useStyles();

  const cardRef = useRef(null);

  useOutsideClick(cardRef, handleClose);

  return (
    <div className={styles.container}>
      <Container>
        <div ref={cardRef} className={styles.card}>
          <button
            className={styles.closeButton}
            type="button"
            onClick={handleClose}
          >
            <img src={closeIcon} alt="Close" />
          </button>
          <img height="354px" className={styles.img} src={imgSrc} alt={title} />
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
