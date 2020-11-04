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

  return url;
};
