import { TWUEvent } from "@/types";
import { fetchWrapper } from "./fetchWrapper";

export async function getTWUEvents(): Promise<TWUEvent[]> {
    return await fetchWrapper.get('events');
}