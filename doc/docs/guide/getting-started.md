---
sidebar_position: 2
---

# Getting Started

## Define your router

You can define your route names then use the hook `useRouter` to right your routes

```tsx
type NestedRouteName = '/account' | '/account/settings' | '/account/contact';
const Account: React.FC = () => {
  return useRouter<RouteName>([
    { path: '/account/settings', component: <Settings /> },
    { path: '/account/contact', component: <Contact /> },
    { path: '/account', component: <AccountMenu /> },
  ]);
};

type RouteName = '/' | '/home' | '/account';

const Router: React.FC = () => {
  return useRouter<RouteName>([
    { path: '/', component: <Hello />, exact: true },
    { path: '/home', component: <Home /> },
    { path: '/account', component: <Account /> },
  ]);
};
```

After that you can use your Router component where you want.

## About useRouter

You can use it to create Router componant every where. It's supported for nested router too.
