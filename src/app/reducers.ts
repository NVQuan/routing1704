import { Client, Story } from './type';

export function clientReducer(state: Client = null, action): Client {
    if (action.type === 'SET_CLIENT') return action.client;
    if (action.type === 'LOG_OUT') return null;
    return state;
}


export function storiesReducer(state: Story[] = [], action): Story[] {
    if (action.type === 'SET_STORIES') return action.stories;
    if (action.type === 'CREATE_STORY') return [action.story, ...state];
    return state;
}
