import { getPages } from './getPages';

describe('getPages', () => {
  test('Returns pages from 1 to n without divider', () => {
    expect(getPages(1, 4, 2)).toEqual({
      displayDivider: false,
      pages: [1, 2, 3, 4],
    });
  });

  test('Returns 2 parts of pages with divider', () => {
    expect(getPages(1, 6, 2)).toEqual({
      displayDivider: true,
      pages: [1, 2, 5, 6],
    });
  });

  test('Returns no divider when current page is one of the last ones', () => {
    expect(getPages(4, 6, 2)).toEqual({
      displayDivider: false,
      pages: [3, 4, 5, 6],
    });
  });
});
