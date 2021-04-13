export type Route = {
  path: string;
  component: React.ReactNode;
  routes?: Route[];
  protected?: boolean;
  exact?: boolean;
};
