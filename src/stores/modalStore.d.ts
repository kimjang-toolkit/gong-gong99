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
declare const useModalStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Actions>>;
export default useModalStore;
