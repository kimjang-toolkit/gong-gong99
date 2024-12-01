import { create } from 'zustand';

type Modal = {
  element: React.FC;
};

type State = {
  modals: Modal[];
};

type Actions = {
  openModal: (element: React.FC) => void;
  closeModal: () => void;
};

const useModalStore = create<State & Actions>((set) => ({
  modals: [],
  openModal: (component) => {
    document.body.style.overflow = 'hidden';
    set((state) => ({
      modals: [...state.modals, { element: component }],
    }));
  },
  closeModal: () =>
    set((state) => {
      const newModals = state.modals.slice(0, -1);
      if (newModals.length === 0) {
        document.body.style.overflow = 'auto';
      }
      return {
        modals: newModals,
      };
    }),
}));

export default useModalStore;
