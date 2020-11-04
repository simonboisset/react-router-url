export const history = {
  push: (nextUrl: string) => {
    window.history.pushState(null, 'null', nextUrl);
    window.dispatchEvent(new Event('popstate'));
  },
  back: window.history.back,
};
