import React from 'react';
import { history } from '../utils/history';

export const Redirect: React.FC<{ to: string }> = ({ to }) => {
  React.useEffect(() => {
    history.push(to);
  });
  return null;
};
