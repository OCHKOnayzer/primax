"use client";

import React, { useEffect, useState } from "react";
import { QueryClientProvider } from '@tanstack/react-query'
import { initMocks } from "@/mock/initMocks";
import { createQueryClient } from "./queryProvider";
import { Loader } from "../ui/Loader";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);
  const [queryClient] = useState(() => createQueryClient())

  useEffect(() => {
    async function start() {
      await initMocks();
      setReady(true);
    }

    start();
  }, []);

  if (!ready) return <Loader />;

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
