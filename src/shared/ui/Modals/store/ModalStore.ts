import { create } from "zustand";

type CurrentModal = "SideMenuModal" | null;

interface ModalState {
  isOpen: boolean;
  currentModal: CurrentModal;
  openModalWindow: () => void;
  closeModalWindow: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  currentModal: null,
  openModalWindow: () => set({ isOpen: true }),
  closeModalWindow: () => set({ isOpen: false }),
}));
