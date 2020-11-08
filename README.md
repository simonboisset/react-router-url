# React Router URL
A simple, flexible and zero dependencies router for react. 

It uses hooks and URL api.
I use [TSDX](https://tsdx.io/) for packaging.

# Install

```sh
yarn add react-router-url
```

# Get Started

Just use the Router component where you want.

```tsx
import { Router } from 'react-router-url'
// and use it in your component

<Router
    routes={[
        { path: '/hello', component: <div>Hello</div> },
        { path: '/', component: <div>Home</div> },
    ]}
/>
```

# Core

The core concept is base on `history` object and `useURL` hook.
If you don't need compoenents but only `url` tool, you can use `react-hook-url` wich is the same package without components.

## history

It's based on `window.history`

### push
This method will redirect you to the new url.

inputs : 
- nextUrl: the url target
- params: if you need it you can add object with params

exemple :
```ts
history.push('/login')}
history.push('/account', { user: 'joe' })}
```

### goBack

```ts
history.goBack()
```
### canGoBack

```ts
if(history.canGoBack()){
    history.goBack()
}
```

## useURL
It's a hook for react component, watching path and params.

```ts
export const Account = () => {
  const { path ,params} = useURL();
  return(
    <div>
        <div>Path : {path}</div>
        <div>User : {params.user}</div>
    </div>
  )
}
```

# Components
These components are using the core utils to make a router.

## Router
The main compoenent. 
It will render the first compoenent which is mathing with the current path.

You can add subroutes in every routes. The router will test the subroutes before the parents.
If a route need authentication you can add the `auth` props in router and `protected:true` to the route.

```tsx
<Page>
    <Router auth={auth} routes={[
    { path: '/account',protected:true, component: <Acount/> },
    {
        path: '/',
        component: <Redirect to='/home'/>,
        routes: [
            { path: '/home', component: <Home /> },
            { path: '/aboutus', component: <About/> },
            { path: '/contact', component: <Contact /> },
        ],
    },
]} />
</Page>
```

## Redirect

This component will redirect to his `to` props when he is rendering

```tsx
<Redirect to="/" />
```