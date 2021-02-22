import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

export default function LoadingScreen() {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
  });
  return null;
}
