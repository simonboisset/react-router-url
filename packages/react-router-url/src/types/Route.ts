import { ReactNode } from 'react';

export type Route = {
  path: string;
  component: ReactNode;
  routes?: Route[];
  protected?: boolean;
  exact?: boolean;
};
