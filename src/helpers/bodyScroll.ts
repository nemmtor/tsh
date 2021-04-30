const NO_SCROLL_CLASS = 'noscroll';

export const bodyScroll = {
  enable: () => {
    document.body.classList.remove(NO_SCROLL_CLASS);
  },
  disable: () => {
    document.body.classList.add(NO_SCROLL_CLASS);
  },
};
