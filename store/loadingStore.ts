import { PagedResult, TWUEvent } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './mmkv-storage';

export interface LoadingState {
  isLoading: boolean;
}

export interface LoadingActions {
  setLoading: (state: boolean) => void;
}

const initialState: LoadingState = {
  isLoading: false,
};

const useLoadingStore = create<LoadingState & LoadingActions>()((set) => ({
  ...initialState,
  setLoading: (state: boolean) => {
    set(() => ({
      isLoading: state,
      
    }));
  },
}));

export default useLoadingStore;
