import { PagedResult, TWUEvent } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './mmkv-storage';

export interface EventState {
  events: TWUEvent[];
  totalCount: number;
}

export interface EventActions {
  setEvents: (data: TWUEvent[]) => void;
  reduceEvent: (event: TWUEvent) => void;
}

const initialState: EventState = {
  events: [],
  totalCount: 0,
};

const useEventStore = create<EventState & EventActions>()(
  persist(
    (set) => ({
      ...initialState,
      setEvents: (events: TWUEvent[]) => {
        set(() => ({
          events: events,
          totalCount: events.length,
        }));
      },
      reduceEvent: (event: TWUEvent) => {
        set((state) => {
          state.totalCount -= 1;
          return {
            events: state.events.filter((p) => p.id === event.id),
          };
        });
      },
    }),
    
    {
      name: 'events',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useEventStore;
