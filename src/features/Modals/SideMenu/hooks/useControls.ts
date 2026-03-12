import { useState, useCallback } from "react";
import { useAnimationControls } from "framer-motion";
import { useModal } from "@/shared";

export function useControls() {
  const controls = useAnimationControls();
  const { closeModalWindow } = useModal();
  const [closing, setClosing] = useState<boolean>(false);

  const start = useCallback(() => {
    return controls.start({
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    });
  }, [controls]);

  const close = useCallback(() => {
    return controls.start({
      x: "-150%",
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  }, [controls]);

  const handleClose = useCallback(async () => {
    if (closing) return;
    setClosing(true);
    await close();
    closeModalWindow();
    setClosing(false);
  }, [closing, closeModalWindow, close]);

  return {
    start,
    controls,
    handleClose,
    closing,
  };
}
