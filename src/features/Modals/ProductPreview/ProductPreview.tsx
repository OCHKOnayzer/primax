import React from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Button, ButtonVariant, ButtonType, useModal } from "@/shared";
import { CommonSize } from "@/types";

export const ProductPreview = () => {
  const { closeModalWindow } = useModal();

  return (
    <AnimatePresence>
      <div className=" w-full h-full flex justify-center items-center">
        <div className="w-1/2 bg-gray-100 rounded-3xl overflow-hidden p-2">
          <div className="flex flex-row gap-sm">
            <div className="h-[70vh] w-1/2 rounded-2xl"></div>
            <div className="flex flex-col gap-sm w-1/2 rounded-2xl bg-white p-6">
              <div className="flex flex-row justify-between">
                <div className="flex gap-sm items-center">
                  <Link
                    className="bg-gray-50 p-2 rounded-2xl text-sm hover:bg-gray-100 transition"
                    href={"/"}
                  >
                    compony
                  </Link>

                  <Button
                    size={CommonSize.md}
                    variant={ButtonVariant.bordered}
                    type={ButtonType.button}
                    className="bg-gray-50 text-sm hover:bg-gray-100 transition"
                  >
                    original
                  </Button>
                </div>
                <div className="flex gap-sm items-center">
                  <Button
                    size={CommonSize.md}
                    variant={ButtonVariant.bordered}
                    type={ButtonType.button}
                  ></Button>
                  <Button
                    onClick={closeModalWindow}
                    size={CommonSize.md}
                    variant={ButtonVariant.bordered}
                    type={ButtonType.button}
                  >
                    close
                  </Button>
                </div>
              </div>
              
                <div>name</div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
