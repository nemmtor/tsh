interface Pages {
  pages: number[];
  displayDivider: boolean;
}

export const getPages = (
  currentPage: number,
  totalPages: number,
  pagesOnEachSide: number,
): Pages => {
  // Return all pages
  if (totalPages <= pagesOnEachSide * 2)
    return {
      pages: [...Array(totalPages)].map((_, i) => i + 1),
      displayDivider: false,
    };

  const maxLeftSideEndsAt = totalPages - pagesOnEachSide;
  const leftSideEndsAt = Math.min(
    Math.max(currentPage + 1, pagesOnEachSide),
    maxLeftSideEndsAt,
  );

  const rightSideStartsAt = totalPages - pagesOnEachSide;

  let displayDivider = true;
  if (leftSideEndsAt === rightSideStartsAt) {
    displayDivider = false;
  }

  const leftSide = [...Array(pagesOnEachSide)]
    .map((_, i) => leftSideEndsAt - i)
    .reverse();

  const rightSide = [...Array(pagesOnEachSide)]
    .map((_, i) => totalPages - i)
    .reverse();

  return { pages: [...leftSide, ...rightSide], displayDivider };
};
