import React from "react";
import { AnimatePresence } from "framer-motion";
import { div as MotionDiv } from "framer-motion/client";

export const SearchResult = ({ searchText }: { searchText: string }) => {
  return (
    <AnimatePresence mode="wait">
      <div className="text-black absolute z-10 left-0 top-full mt-2 w-full rounded-xl bg-white shadow-lg p-4">
        hello world
      </div>
    </AnimatePresence>
  );
};
