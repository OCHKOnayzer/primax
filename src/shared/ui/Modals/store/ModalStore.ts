import { create } from "zustand";
import { CurrentModalEnum } from "./types";

interface ModalState {
  isOpen: boolean;
  currentModal: CurrentModalEnum | null;
  openModalWindow: (current: CurrentModalEnum) => void;
  closeModalWindow: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  currentModal: null,
  openModalWindow: (current) => set({ isOpen: true, currentModal: current }),
  closeModalWindow: () => set({ isOpen: false, currentModal: null }),
}));
