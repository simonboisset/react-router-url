import { Route } from '../types/Route';
import { useURL } from './useURL';

export const useRouter = <T extends string>(routes: Route<T>[]) => {
  const { path } = useURL();

  const renderedRoute = (): JSX.Element | null => {
    for (const route of routes) {
      if (path.includes(route.path)) {
        if (!route.exact || path === route.path) {
          return route.component;
        }
      }
    }
    return null;
  };
  return renderedRoute();
};
