"use client";

import React from "react";
import Image from "next/image";
import { Search } from "../Search";
import { Button } from "@/shared";
import { useModal } from "@/shared";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { ButtonVariant, ButtonType } from "@/shared/ui/Button";
import { CommonSize } from "@/types";

export const Header = () => {
  const openModal = useModal((state) => state.openModalWindow);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="relative flex justify-center h-[12vh] bg-custom-gradient after:content-[''] after:block after:w-full after:h-6 after:rounded-t-[24px] after:bg-white after:absolute after:-bottom-px after:left-0">
      <div className="flex items-center w-[75%] h-4/5">
        <div className="flex justify-between w-full h-3/5 gap-sm">
          <div className="flex items-center gap-sm w-fit">
            <Button
              variant={ButtonVariant.bordered}
              type={ButtonType.button}
              size={CommonSize.sm}
              onClick={() => openModal()}
            >
              <Image src={"/menu.png"} height={32} width={32} alt="" />
            </Button>
            <div className="flex items-center"></div>
          </div>
          <Search />
          <div className="flex items-center gap-sm w-fit">
            <Button
              variant={ButtonVariant.bordered}
              type={ButtonType.button}
              size={CommonSize.sm}
              onClick={() => router.push("/cart")}
              className={pathname === "/cart" ? "border-0 border-white" : ""}
            >
              <Image src={"/cart.svg"} height={32} width={32} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
