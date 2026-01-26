"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/shared";
import { ButtonVariant, ButtonType } from "@/shared/ui/Button";
import { CommonSize } from "@/types";
import { useRouter } from "next/navigation";

export const EmptyCart = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center flex-col gap-md">
      <div className="select-none pointer-events-none">
        <Image
          src={"/images/cart/cart_fill.gif"}
          alt=""
          height={280}
          width={280}
        />
      </div>
      <h2 className="font-bold text-4xl">Корзина пуста!</h2>
      <div className="flex justify-center gap-lg">
        <Button
          variant={ButtonVariant.bordered}
          type={ButtonType.button}
          size={CommonSize.md}
          className="primary-border-color hover:primary-bg-color hover:text-white"
        >
          В каталог
        </Button>
        <Button
          variant={ButtonVariant.bordered}
          type={ButtonType.button}
          size={CommonSize.md}
          onClick={() => router.push("/")}
          className="primary-border-color hover:primary-bg-color hover:text-white"
        >
          На главную
        </Button>
      </div>
    </div>
  );
};
