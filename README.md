# React Router URL

A simple, flexible and zero dependencies router for React and Typescript support.

Update v0.7.0

It uses React hooks and URL api.

# Table of Contents

- [Install](#install)
- [Get Started](#get-started)
- [Core](#core)
  - [history](#history)
  - [useURL](#useurl)
- [Components](#components)
  - [Router](#router)
  - [Redirect](#redirect)

# Install

```sh
yarn add react-router-url
```

# Get Started

## Define your router

You can define your route names then use the hook `useRouter` to right your routes

```jsx
type RouteName = '/' | '/home' | '/account';

export const Router: React.FC = () => {
  return useRouter<RouteName>([...]);
};
```

After that you can use your Router component where you want.

## About useRouter

You can use it to create Router componant every where. It's supported for nested router too.

# Core

The core concept is base on `history` object and `useURL` hook.

## history

It's based on `window.history`

### push

This method will redirect you to the new url.

inputs :

- nextUrl: the url target
- params: if you need it you can add object with params

exemple :

```js
history.push('/login')}
history.push('/account', { user: 'joe' })}
```

### goBack

```js
history.goBack();
```

### canGoBack

```js
if (history.canGoBack()) {
  history.goBack();
}
```

## useURL

It's a hook for react component, watching path and params.

```js
export const Account = () => {
  const { path, params } = useURL();
  return (
    <div>
      <div>Path : {path}</div>
      <div>User : {params.user}</div>
    </div>
  );
};
```

# Components

## Redirect

This component will redirect to his `to` props when he is rendering

```jsx
<Redirect to="/" />
```
