"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/shared";
import { Button, ButtonVariant, ButtonType } from "@/shared";
import { CommonSize } from "@/types";
import { SideMenuList } from "./ui";
import { useControls } from "./hooks";
import { FiX } from "react-icons/fi";

export const SideMenuModal = ({
  isAnimatingClose,
}: {
  isAnimatingClose: boolean;
}) => {
  const isOpen = useModal((state) => state.isOpen);

  const { controls, closing, start, handleClose } = useControls();

  useEffect(() => {
    if (isOpen && !closing) start();
  }, [start, isOpen, closing]);

  useEffect(() => {
    if (isAnimatingClose && !closing) handleClose();
  }, [handleClose, isAnimatingClose, closing]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="side-menu"
          key="side-menu"
          className="flex h-fit w-fit"
          initial={{ x: "-100%" }}
          animate={controls}
        >
          <SideMenuList />
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="h-fit m-2 text-white hover:text-black hover:bg-gray-200 transition-colors z-50 shadow-lg"
            variant={ButtonVariant.bordered}
            type={ButtonType.button}
            size={CommonSize.md}
            disabled={closing}
          >
            <FiX className="h-8 w-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
