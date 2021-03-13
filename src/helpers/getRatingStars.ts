interface Star {
  id: string;
  isFilled: boolean;
}

export const MIN_RATING = 0;
export const MAX_RATING = 5;

export const getRatingStars = (rating: number): Star[] => {
  // Return all stars filled
  if (rating > MAX_RATING) {
    return [...Array(MAX_RATING)].map((_, i) => ({
      // Probably not the best practice to use Math.random() here
      id: i + String(Math.random()),
      isFilled: true,
    }));
  }

  // Return all stars unfilled
  if (rating < MIN_RATING) {
    return [...Array(MAX_RATING)].map((_, i) => ({
      id: i + String(Math.random()),
      isFilled: false,
    }));
  }

  const starsFilled: Star[] = [...Array(rating)].map((_, i) => ({
    id: i + String(Math.random()),
    isFilled: true,
  }));

  const starsUnfilled: Star[] = [...Array(MAX_RATING - rating)].map((_, i) => ({
    id: i + String(Math.random()),
    isFilled: false,
  }));

  return [...starsFilled, ...starsUnfilled];
};
