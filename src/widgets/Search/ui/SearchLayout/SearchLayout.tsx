import { Input } from "@/shared";
import React, { FC, PropsWithChildren, useState, useEffect } from "react";

export const SearchLayout: FC<PropsWithChildren> = ({ children }) => {
  // const [] = useState<number[]>([]);
  const [layoutFocus, setLayoutFocus] = useState<boolean>(false);

  return (
    <div className="flex justify-center border-[#8686f3cb] rounded-2xl bg-[#8686f3b2] h-full w-4/5 focus-within:border-blue-[]">
      <div className="flex items-center w-[95%]">
        <input className="w-full h-full outline-none" type="text" />
      </div>
    </div>
  );
};
