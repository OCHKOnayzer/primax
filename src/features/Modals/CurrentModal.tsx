"use client";

import React, { useState } from "react";
import { SideMenuModal } from "./SideMenu";
import { useModal } from "@/shared";

const MODAL_COMPONENTS = {
  SideMenuModal: SideMenuModal,
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
