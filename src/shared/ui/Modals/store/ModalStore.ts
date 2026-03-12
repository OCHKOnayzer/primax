import { create } from "zustand";
import { CurrentModalEnum } from "./types";

interface ModalState {
  isOpen: boolean;
  currentModal: CurrentModalEnum | null;
  openModalWindow: () => void;
  closeModalWindow: () => void;
  setCurrentModal: (current: CurrentModalEnum) => void;
}

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  currentModal: null,
  openModalWindow: () => set({ isOpen: true }),
  closeModalWindow: () => set({ isOpen: false, currentModal: null }),
  setCurrentModal: (current) => set({ currentModal: current }),
}));
