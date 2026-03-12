import React from "react";
import Image from "next/image";
import { CardData } from "./types";
import { Button } from "@/shared";
import { ButtonVariant, ButtonType } from "@/shared/ui/Button";
import { CommonSize } from "@/types";
import { formatedPrice } from "@/utils";

export const Card = ({ name, images, price }: CardData) => {
  return (
    <div
      className="flex flex-col h-auto w-auto gap-sm"
      onClick={() => console.log("hello world")}
    >
      <div className="flex justify-center items-center select-none pointer-events-none">
        <Image src={images?.[0]} height={250} width={250} alt={name} />
      </div>
      <div className="flex flex-col gap-sm">
        <div className="flex items-center gap-sm">
          <div className="font-semibold text-xl">
            <span>{formatedPrice(price)}</span>&nbsp;<span>₽</span>
          </div>
          <div className="text-sm line-through">
            <span>{formatedPrice(price)}</span>&nbsp;<span>₽</span>
          </div>
        </div>
        <div>{name}</div>
      </div>
      <Button
        variant={ButtonVariant.default}
        type={ButtonType.button}
        size={CommonSize.md}
        className="flex justify-center gap-sm"
      >
        <Image src={"/cart.svg"} height={20} width={20} alt="hero" />В корзину
      </Button>
    </div>
  );
};
