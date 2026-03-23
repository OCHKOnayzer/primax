"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "./items";
export const Slider = () => {
  const [slide, setSlide] = useState<number>(0);

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative h-[400px] w-[100%]">
        <AnimatePresence>
          <motion.div key={slide}>
            <Image
              src={slides[slide]}
              fill
              alt="hero"
              priority
              className="select-none pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
