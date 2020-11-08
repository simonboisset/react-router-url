import React from 'react';

export const useURL = () => {
  const [url, setUrl] = React.useState(new URL(window.location.href));

  React.useEffect(() => {
    const handleChangeURL = () => {
      setUrl(new URL(window.location.href));
    };
    window.addEventListener('popstate', handleChangeURL);
    window.dispatchEvent(new Event('popstate'));
    return () => {
      window.removeEventListener('popstate', handleChangeURL);
    };
  }, []);
  const path = url.pathname;
  const origin = url.origin;
  let params: { [key: string]: string | null } = {};
  const paramsList = url.search
    .slice(1)
    .split('&')
    .map((param) => param.split('='))
    .map((param) => ({ [param[0]]: url.searchParams.get(param[0]) }));
  for (const param of paramsList) {
    params = { ...params, ...param };
  }
  return { origin, path, params };
};

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
