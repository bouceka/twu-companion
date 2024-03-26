import { create } from 'zustand';
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

);

export default useUserStore;
