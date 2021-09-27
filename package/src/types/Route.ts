export type Route<T extends string> = {
  path: T;
  component: JSX.Element;
  exact?: boolean;
};
