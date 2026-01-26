import { create } from "zustand";

type CartItem = {
  name: string;
  price: number;
  count: number;
};

type CartState = {
  items: CartItem[];
};

export const useCartItems = create<CartState>((set) => ({
  items: [],
  addItems: (item: CartItem) =>
    set((state) => ({
      items: [...state.items, item],
    })),
}));
