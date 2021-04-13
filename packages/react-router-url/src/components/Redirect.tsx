import React from 'react';
import { history } from 'react-hook-url';

export const Redirect = ({ to }: { to: string }) => {
  React.useEffect(() => {
    history.push(to);
  });
  return null;
};
