import React from "react";
import Image from "next/image";
import { CardData } from "./types";
import {
  Button,
  ButtonVariant,
  ButtonType,
  useModal,
  CurrentModalEnum,
} from "@/shared";
import { CommonSize } from "@/types";
import { formatedPrice } from "@/utils";

export const Card = ({ name, images, price }: CardData) => {
  const openModalWindow = useModal((state) => state.openModalWindow);

  return (
    <div
      className="flex flex-col h-auto w-auto gap-sm group"
      onClick={() => console.log("hello world")}
    >
      <div className="flex justify-center items-center select-none pointer-events-none relative">
        <Image src={images?.[0]} height={250} width={250} alt={name} />
        <Button
          variant={ButtonVariant.bordered}
          type={ButtonType.button}
          size={CommonSize.md}
          onClick={() => openModalWindow(CurrentModalEnum.ProductPreview)}
          className="absolute bottom-1 w-full bg-gray-100 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition"
        >
          hello world
        </Button>
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
