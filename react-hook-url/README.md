# React Hook URL
A simple, hook watching url for react. 

It uses hooks and URL api.
I use [TSDX](https://tsdx.io/) for packaging.

# Table of Contents

- [Install](#install)
- [Get Started](#get-started)
- [history](#history)
- [useURL](#useurl)

# Install

```sh
yarn add react-hook-url
```

# Get Started

Just use the hook in your component where you want.

```jsx
import { history, useURL } from 'react-hook-url'
```

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
history.goBack()
```
### canGoBack

```js
if(history.canGoBack()){
    history.goBack()
}
```

## useURL
It's a hook for react component, watching path and params.

```js
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