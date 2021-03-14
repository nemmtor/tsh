import { getArrayHalfs } from './getArrayHalfs';

describe('getArrayHalf', () => {
  test('Returns 2 halfs of array on even array', async () => {
    const arr = [1, 2, 3, 4];
    expect(getArrayHalfs(arr)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test('Returns 2 halfs of array on odd array (1st one larger)', async () => {
    const arr = [1, 2, 3, 4, 5];
    expect(getArrayHalfs(arr)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  test('Returns input if len < 2', async () => {
    const arr = [1];
    expect(getArrayHalfs(arr)).toEqual([1]);
  });
});
