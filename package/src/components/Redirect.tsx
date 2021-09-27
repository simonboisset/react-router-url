import React, { useEffect } from 'react';
import { history } from '../utils/history';

export const Redirect: React.FC<{ to: string }> = ({ to }) => {
  useEffect(() => {
    history.push(to);
  });
  return null;
};
