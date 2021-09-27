---
sidebar_position: 3
---

# History

`history` is based on `window.history`

## History methods

### push

This method will redirect you to the new url.

inputs :

- nextUrl: the url target
- params: if you need it you can add object with params

exemple :

```tsx
import { history } from 'react-router-url';

history.push('/login')}
history.push('/account', { user: 'joe' })}
```

### goBack

```tsx
history.goBack();
```

### canGoBack

```tsx
if (history.canGoBack()) {
  history.goBack();
}
```
