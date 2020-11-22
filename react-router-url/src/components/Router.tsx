import React from 'react';
import { Route } from '../types/Route';
import { history } from '../utils/history';
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
        if (path !== route.path) {
          history.push(route.path);
          return null;
        }
        return route.component;
      }
    }
    return null;
  };

  return rendredRoute(routes);
};
