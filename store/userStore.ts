import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { mmkvStorage } from './mmkv-storage';
import { User } from '@/types';

export interface UserState {
  user: User | null;
}

export interface UserActions {
  setUser: (user: User) => void;
  deleteUser: (user: User) => void;
}

const initialState: UserState = {
  user: null,
};

const useUserStore = create<UserState & UserActions>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user: User) => {
        set(() => ({
          user: user,
        }));
      },
      deleteUser: (user: User) => {
        set(() => ({
          user: null,
        }));
      },
    }),

    {
      name: 'user',
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);

export default useUserStore;
