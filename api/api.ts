import { TWUEvent, Tip } from '@/types';
import { fetchWrapper } from './fetchWrapper';

export async function getTWUEvents(query?: string): Promise<TWUEvent[]> {
  return await fetchWrapper.get(`events${query? `?q=${query}` : ''}`);
}

export async function getTips(query?: string): Promise<Tip[]> {
  return await fetchWrapper.get(`tips${query? `?q=${query}` : ''}`);
}
