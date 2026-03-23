"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { div as MotionDiv } from "framer-motion/client";
import { CurrentModal } from "@/features";
import { useModal } from "./store";

export const ModalLayout = () => {
  const isOpen = useModal((state) => state.isOpen);
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <MotionDiv
          initial={{ backgroundColor: "#868686c0" }}
          animate={{
            backgroundColor: "#80808098",
            backdropFilter: "blur(5px)",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className="fixed h-full w-full z-20"
        >
          <CurrentModal />
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};
