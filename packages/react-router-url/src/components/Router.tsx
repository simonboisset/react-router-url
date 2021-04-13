import React from 'react';
import { useURL } from 'react-hook-url';
import { Route } from '../types/Route';

type RouterProps = {
  routes: Route[];
  auth?: boolean;
};

export const Router = ({ routes, auth }: RouterProps) => {
  const { path } = useURL();

  const renderedRoute = (testedRoutes: Route[]): React.ReactNode | null => {
    for (const route of testedRoutes) {
      if (path.includes(route.path) && !(route.protected && !auth)) {
        if (!!route.routes) {
          const subrenderedRoute = renderedRoute(route.routes);
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

  return renderedRoute(routes);
};
