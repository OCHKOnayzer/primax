'use client'

import React, {useEffect, useState} from 'react';
import { initMocks } from '@/mock/initMocks';
import { Loader } from '../ui/Loader';

export const AppProviders = ({ children }: {children: React.ReactNode}) => {
 const [ready, setReady] = useState(false);

  useEffect(() => {
    async function start() {
      await initMocks();
      setReady(true);
    }

    start();
  }, []);

  if (!ready) return <Loader/>;

  return <>{children}</>;
}
