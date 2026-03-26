import React from "react";
import Link from "next/link";
import { sideMenuItems } from "./items";
export const SideMenuList = () => {
  return (
    <div
      className="h-dvh w-[85vw] max-w-[380px] bg-white z-40 rounded-tr-2xl rounded-br-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <nav aria-label="dialog items list" className="p-4 flex flex-col w-full">
        <div className="flex flex-col gap-[12px]">
          {sideMenuItems.map((item) => (
            <Link
              className="h-[40px] flex items-center justify-center rounded-[10px] hover:bg-indigo-100"
              href={"/"}
              key={item.name}
            >
              <div className="layout-area flex gap-sm items-center">
                <span className="">{item.image}</span>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
