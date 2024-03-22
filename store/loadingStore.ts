import { create } from 'zustand';


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
