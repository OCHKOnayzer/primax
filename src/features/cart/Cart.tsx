"use client";

import React from "react";
import { EmptyCart } from "./ui";
import { useCartItems } from "./store";

export const Cart = () => {
  const { items } = useCartItems();

  console.log(items);

  return items.length === 0 ? <EmptyCart /> : <div></div>;
};
