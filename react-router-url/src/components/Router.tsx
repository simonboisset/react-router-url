import React from 'react';
import { Route } from '../types/Route';
import { useURL } from '../utils/useURL';

type RouterProps = {
  routes: Route[];
  auth?: boolean;
};

export const Router: React.FC<RouterProps> = ({ routes, auth }) => {
  const { path } = useURL();

  const rendredRoute = (testedRoutes: Route[]): JSX.Element | null => {
    for (const route of testedRoutes) {
      if (path.includes(route.path) && !(route.protected && !auth)) {
        if (!!route.routes) {
          const subrenderedRoute = rendredRoute(route.routes);
          if (subrenderedRoute) {
            return subrenderedRoute;
          }
        }
        if (!route.exact || path === route.path) {
          return route.component;
        }
      }
    }
    return null;
  };

  return rendredRoute(routes);
};
