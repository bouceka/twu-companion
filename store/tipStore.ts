import { Tip } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { mmkvStorage } from './mmkv-storage';

export interface TipState {
  tips: Tip[];
  totalCount: number;
}

export interface TipActions {
  setTips: (data: Tip[]) => void;
  reduceTip: (event: Tip) => void;
}

const initialState: TipState = {
  tips: [],
  totalCount: 0,
};

const useTipStore = create<TipState & TipActions>()(
  persist(
    (set) => ({
      ...initialState,
      setTips: (tips: Tip[]) => {
        set(() => ({
          tips: tips,
          totalCount: tips.length,
        }));
      },
      reduceTip: (tip: Tip) => {
        set((state) => {
          const filteredTips = state.tips.filter((p) => p.id !== tip.id);
          return {
            tips: filteredTips,
            totalCount: state.totalCount - 1,
          };
        });
      },
    }),
    
    {
      name: 'tips',
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);

export default useTipStore;
