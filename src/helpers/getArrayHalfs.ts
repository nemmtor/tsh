export const getArrayHalfs = <T>(arr: T[]) => {
  if (arr.length < 2) return arr;

  const half = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, half);

  let secondHalf;
  if (arr.length % 2 === 0) {
    secondHalf = arr.slice(-half);
  } else {
    secondHalf = arr.slice(-half + 1);
  }
  return [firstHalf, secondHalf];
};
