import { create } from 'zustand';

type Modal = {
  element: React.ReactNode;
};

type State = {
  modals: Modal[];
};

type Actions = {
  openModal: (element: React.ReactNode) => void;
  closeModal: () => void;
};

const useModalStore = create<State & Actions>((set) => ({
  modals: [],
  openModal: (component) => {
    set((state) => ({
      modals: [...state.modals, { element: component }],
    }));
  },
  closeModal: () =>
    set((state) => {
      const newModals = state.modals.slice(0, -1);
      return {
        modals: newModals,
      };
    }),
}));

export default useModalStore;
