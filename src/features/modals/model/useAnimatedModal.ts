import { useState, useCallback } from "react";
import { useAnimation, useAnimationControls } from "framer-motion";
import { useModal } from "@/shared";

type UseAnimatedModalParams = {
  onAnimationStart: (
    controls: ReturnType<typeof useAnimation>,
  ) => Promise<any> | void;
  onAnimationEnd: (
    controls: ReturnType<typeof useAnimation>,
  ) => Promise<any> | void;
};
export function useAnimatedModal({
  onAnimationStart,
  onAnimationEnd,
}: UseAnimatedModalParams) {
  const { closeModalWindow } = useModal();
  const [closing, setClosing] = useState<boolean>(false);

  const controls = useAnimationControls();

  const start = useCallback(() => {
    return onAnimationStart?.(controls);
  }, [controls, onAnimationStart]);

  const close = useCallback(() => {
    return onAnimationEnd?.(controls);
  }, [controls, onAnimationEnd]);

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
