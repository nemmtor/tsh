interface Star {
  id: number;
  isFilled: boolean;
}

export const MIN_RATING = 0;
export const MAX_RATING = 5;

export const getRatingStars = (rating: number): Star[] => {
  // Return all stars filled
  if (rating > MAX_RATING) {
    return [...Array(MAX_RATING)].map((_, i) => ({
      id: i,
      isFilled: true,
    }));
  }

  // Return all stars unfilled
  if (rating < MIN_RATING) {
    return [...Array(MAX_RATING)].map((_, i) => ({
      id: i,
      isFilled: false,
    }));
  }

  const starsFilled: Star[] = [...Array(rating)].map((_, i) => ({
    id: i,
    isFilled: true,
  }));

  const starsUnfilled: Star[] = [...Array(MAX_RATING - rating)].map((_, i) => ({
    id: i,
    isFilled: false,
  }));

  return [...starsFilled, ...starsUnfilled];
};
