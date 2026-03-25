"use client";

import { CardLayout } from "@/widgets";
import { CardItem } from "@/widgets/CardLayout/mockItems";
import { Slider } from "@/widgets";
export default function Home() {
  return (
    <div className="flex flex-col gap-lg">
      <Slider />
      <CardLayout card={CardItem} />
    </div>
  );
}
