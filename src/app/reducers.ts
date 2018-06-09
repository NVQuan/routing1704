import { Client } from './type';

export function clientReducer(state: Client = null, action): Client {
    if (action.type === 'SET_CLIENT') return action.client;
    if (action.type === 'LOG_OUT') return null;
    return state;
}
