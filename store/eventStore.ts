import { TWUEvent } from '@/types';
import { create } from 'zustand';

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

);

export default useEventStore;
