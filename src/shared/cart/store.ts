import { create } from "zustand";

type CartItemsState = {
  items: {
    name: string;
    price: number;
    count: number;
  };
  deleteditems: null;
  addItems: null;
};

export const useCartItems = create<CartItemsState>((set) => ({
  items: { name: "", price: 0, count: 0 },
  deleteditems: null,
  addItems: null,
}));
