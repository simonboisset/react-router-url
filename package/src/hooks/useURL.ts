import { useEffect, useMemo, useState } from 'react';

export const useURL = () => {
  const [url, setUrl] = useState(new URL(window.location.href));

  useEffect(() => {
    const handleChangeURL = () => {
      setUrl(new URL(window.location.href));
    };
    window.addEventListener('popstate', handleChangeURL);
    window.dispatchEvent(new Event('popstate'));
    return () => {
      window.removeEventListener('popstate', handleChangeURL);
    };
  }, []);

  const path = useMemo(() => url.pathname, [url.pathname]);

  const origin = useMemo(() => url.origin, [url.origin]);

  const params = useMemo(() => {
    let params: { [key: string]: string | null } = {};
    const paramsList = url.search
      .slice(1)
      .split('&')
      .map((param) => param.split('='))
      .map((param) => ({ [param[0]]: url.searchParams.get(param[0]) }));
    for (const param of paramsList) {
      params = { ...params, ...param };
    }
    return params;
  }, [url.search]);

  return { origin, path, params };
};
