import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
type State = {
  token: string | null;
  ownerName: string | null;
};

type Actions = {
  setToken: (token: string) => void;
  setOwnerName: (ownerName: string) => void;
};

const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      token: null,
      ownerName: null,
      setToken: (token) => {
        set({ token });
      },
      setOwnerName: (ownerName) => {
        set({ ownerName });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
