import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { span as MotionSpan } from "framer-motion/client";
import { suggestions } from "./items";
import { SearchResult } from "./SearchResult";

export const SearchBar = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (searchText) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % suggestions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [searchText]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <div className="relative w-4/5 text-white">
      <div className="flex w-full items-center border border-[#8686f3cb] rounded-2xl bg-[#8686f3b2] h-12 px-3">
        <div className="flex w-full h-full items-center relative">
          <input
            name={"d"}
            className="outline-none bg-transparent w-full"
            type="text"
            value={searchText}
            onChange={handleChange}
          />
          {searchText.length < 1 && (
            <div className="absolute flex items-center pointer-events-none w-full text-gray-300 h-full overflow-hidden">
              <div className="shrink-0">Поиск по запросу</div>
              <AnimatePresence mode="wait" initial={false}>
                <MotionSpan
                  key={placeholderIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  &nbsp;{suggestions[placeholderIndex]}
                </MotionSpan>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      <SearchResult searchText={searchText} />
    </div>
  );
};
