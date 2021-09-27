---
sidebar_position: 4
---

# useURL

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
