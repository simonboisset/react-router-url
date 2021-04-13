import { location } from './location';

const push = (nextUrl: string, params?: { [key: string]: string }) => {
  const url = new URL(location.origin + nextUrl);
  if (params) {
    for (const key in params) {
      url.searchParams.set(key, params[key]);
    }
  }
};

const goBack = window.history.back;

const canGoBack = () => window.history.length === 1;

export const history = { push, goBack, canGoBack };
