export const history = {
  push: (nextUrl: string, params?: { [key: string]: string }) => {
    const url = new URL(window.location.origin + nextUrl);
    if (params) {
      for (const key in params) {
        url.searchParams.set(key, params[key]);
      }
    }
    window.history.pushState(null, 'null', url.pathname + url.search);
    window.dispatchEvent(new Event('popstate'));
  },
  goBack: window.history.back,
  canGoBack: () => window.history.length === 1,
};
