"use client";

import React, { useState } from "react";
import { SideMenuModal } from "./sideMenu";
import { ProductPreview } from "./productPreview";
import { useModal } from "@/shared";

const MODAL_COMPONENTS = {
  SideMenuModal: SideMenuModal,
  ProductPreview: ProductPreview,
} as const;

export const CurrentModal = () => {
  const [isAnimatingClose, setIsAnimatingClose] = useState<boolean>(false);
  const { currentModal } = useModal();

  if (!currentModal) return null;

  const ModalComponent = MODAL_COMPONENTS[currentModal];

  return (
    <div onClick={() => setIsAnimatingClose(true)} className="h-full w-full">
      <ModalComponent isAnimatingClose={isAnimatingClose} />
    </div>
  );
};
