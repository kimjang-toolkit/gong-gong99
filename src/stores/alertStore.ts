import { create } from 'zustand';

type State = {
  alert: null | {
    status: 'success' | 'fail';
    label: string;
  };
};

type Actions = {
  showAlert: (alert: State['alert']) => void;
};

const useAlertStore = create<State & Actions>((set) => ({
  alert: null,
  showAlert: (alert) => {
    set({ alert });
  },
}));

export default useAlertStore;
