import { useState } from "react";
import { useAnimationControls } from "framer-motion";
import { useModal } from "@/shared";

export function useControls() {
  const controls = useAnimationControls();
  const { closeModalWindow } = useModal();
  const [closing, setClosing] = useState<boolean>(false);

  const start = () =>
    controls.start({
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    });

  const close = () =>
    controls.start({
      x: "-150%",
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeInOut" },
    });

  const handleClose = async () => {
    if (closing) return;
    setClosing(true);
    await close();
    closeModalWindow();
    setClosing(false);
  };

  return {
    start,
    controls,
    handleClose,
    closing,
  };
}
