"use client";

import React, { FC, PropsWithChildren, useEffect } from "react";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
import { ModalLayout } from "@/shared";
import { useModal } from "@/shared";


export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen } = useModal();

  useEffect(()=>{ 
    if(isOpen){ 
      document.body.style.overflow = "hidden";
    }else{ 
      document.body.style.overflow = "";
    }

    return ()=>{ 
      document.body.style.overflow = "";
    }
  },[isOpen])


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {isOpen && <ModalLayout />}
      <main className="flex-1 relative">
        <div className="flex justify-center">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
