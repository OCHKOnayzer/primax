import React from "react";
import { Card } from "@/entities";
import type { CardTypes } from "./types";
import type { CardData } from "@/entities";

export const CardLayout = ({ card }: CardTypes) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-lg">
      {card.map((card: CardData) => (
        <Card
          key={card.name}
          name={card.name}
          images={card.images}
          price={card.price}
        />
      ))}
    </div>
  );
};
