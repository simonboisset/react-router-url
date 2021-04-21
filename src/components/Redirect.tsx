import React from 'react';
import { history } from 'react-hook-url';

export const Redirect: React.FC<{ to: string }> = ({ to }) => {
  React.useEffect(() => {
    history.push(to);
  });
  return null;
};
