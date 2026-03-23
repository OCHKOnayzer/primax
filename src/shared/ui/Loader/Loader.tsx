"use client";

import React from "react";
import { span as MotionSpan } from "framer-motion/client";

const dotVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const dotTransition = {
  duration: 0.6,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

export const Loader = () => {
  return <div className="flex gap-sm items-center justify-center"></div>;
};
