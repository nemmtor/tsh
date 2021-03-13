import { getRatingStars } from './getRatingStars';

describe('getRatingStarsArray', () => {
  test('Returns 3 filled and 2 unfilled when given rating 3', () => {
    const stars = getRatingStars(3).map((star) => star.isFilled);
    expect(stars).toEqual([true, true, true, false, false]);
  });

  test('Returns 5 unfilled when given rating 0', () => {
    const stars = getRatingStars(0).map((star) => star.isFilled);
    expect(stars).toEqual([false, false, false, false, false]);
  });

  test('Returns 5x true when given rating 3', () => {
    const stars = getRatingStars(5).map((star) => star.isFilled);
    expect(stars).toEqual([true, true, true, true, true]);
  });

  test('Returns 5x true when given rating 3', () => {
    const stars = getRatingStars(5).map((star) => star.isFilled);
    expect(stars).toEqual([true, true, true, true, true]);
  });

  test('Returns all stars filled when rating exceeds max', () => {
    const stars = getRatingStars(7).map((star) => star.isFilled);
    expect(stars).toEqual([true, true, true, true, true]);
  });

  test('Returns all stars unfilled when rating is lt 0', () => {
    const stars = getRatingStars(-5).map((star) => star.isFilled);
    expect(stars).toEqual([false, false, false, false, false]);
  });
});
