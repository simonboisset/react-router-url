export type Route = {
  path: string;
  component: JSX.Element;
  routes?: Route[];
  protected?: boolean;
};
