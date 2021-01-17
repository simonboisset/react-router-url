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
