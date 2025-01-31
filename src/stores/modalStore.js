import { create } from 'zustand';
const useModalStore = create((set) => ({
    modals: [],
    openModal: (component) => {
        set((state) => ({
            modals: [...state.modals, { element: component }],
        }));
    },
    closeModal: () => set((state) => {
        const newModals = state.modals.slice(0, -1);
        return {
            modals: newModals,
        };
    }),
}));
export default useModalStore;
