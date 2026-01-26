import React from "react";
import Link from "next/link";
import { sideMenuItems } from "./items";
export const SideMenuList = () => {
  return (
    <div
      className=" h-[100vh] w-[20vw] bg-white z-40 rounded-tr-2xl rounded-br-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4 flex flex-col w-full">
        <div className="flex flex-col gap-[12px]">
          {sideMenuItems.map((items, key) => (
            <Link
              className="h-[40px] flex items-center justify-center rounded-[10px] hover:bg-indigo-100"
              href={"/"}
              key={key}
            >
              <div className="layout-area flex gap-sm items-center">
                <span className="">{items.image}</span>
                <span>{items.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
