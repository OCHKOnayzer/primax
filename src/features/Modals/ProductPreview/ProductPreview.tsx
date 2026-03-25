import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "@/shared";
import { ProductCard } from "./ui";
import { useAnimatedModal } from "../Model";

export const ProductPreview = ({
  isAnimatingClose,
}: {
  isAnimatingClose: boolean;
}) => {
  const { controls, closing, start, handleClose } = useAnimatedModal({
    onAnimationStart: (controls) =>
      controls.start({
        opacity: [0, 1],
        scale: [0.92, 1],
        y: [30, 0],
        transition: {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        },
      }),

    onAnimationEnd: (controls) =>
      controls.start({
        opacity: 0,
        scale: 0.96,
        y: 20,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }),
  });

  const { isOpen } = useModal();

  useEffect(() => {
    if (isOpen && !closing) start();
  }, [start, isOpen, closing]);

  useEffect(() => {
    if (isAnimatingClose && !closing) handleClose();
  }, [handleClose, isAnimatingClose, closing]);

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-preview"
        key="product-preview"
        animate={controls}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        className="h-full w-full flex justify-center items-center"
      >
        <ProductCard close={handleClose} />
      </motion.div>
    </AnimatePresence>
  );
};
